const express=require("express");
const cors=require("cors")

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())


const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/registerLogin",{
  useNewUrlParser:true
}).then(()=>{
  console.log("connection successful")
}).catch((error)=>{
  console.log(error);
})


const userSchema=new mongoose.Schema({
    fname:{
      type:String,
      required:true
    },
    lname:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:String,
      required:true
    }
  })
  const Register=new mongoose.model("Register",userSchema);
  const adminRegister=new mongoose.model("adminRegister",userSchema);


app.post("/",function(req,res){
    const{fname,lname,email,password}=req.body
    console.log(req.body)

    Register.findOne({email:email},(err,user) => {
        if(user){
            res.send({message:"email is already registered"})
        }else{
            var user=new Register({
                fname,
                lname,
                email,
                password
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Successfully Registered"})
                }
            })
            

        }
    })

    
})

app.post("/adminregistration",function(req,res){
  const{fname,lname,email,password}=req.body
  

  adminRegister.findOne({email:email},(err,user) => {
      if(user){
          res.send({message:"email is already registered"})
      }else{
          var user=new adminRegister({
              fname,
              lname,
              email,
              password
          })
          user.save(err=>{
              if(err){
                  res.send(err)
              }else{
                  res.send({message:"Successfully Registered"})
              }
          })
          

      }
  })

  
})




app.post("/login",function(req,res){
    var{email,password}=req.body

    adminRegister.findOne({email:email},(err,user) => {
        if(user){
            if(password===user.password){
                res.send({message:"login successfully"})
                
            }else{
                res.send({message:"email or password are invalid"})
            }
        }else{
            res.send({message:"You are not allowd to login"})
        }
    })
    
})




app.listen(3001,function(){
    console.log("server started at port 3001")
  })