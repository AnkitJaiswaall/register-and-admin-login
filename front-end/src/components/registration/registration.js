import React,{useState} from 'react'
import axios from 'axios'
import "./registration.css"




const Registration = () => {

    const[user,setUser]=useState({
        fname:"",
        lname:"",
        email:"",
        password:""

    })

    const handleChange=(e)=>{
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register=()=>{
      const{fname,lname,email,password}=user
      if(fname && lname && email && password){
       
        axios.post("http://localhost:3001/",user).then(res=>alert(res.data.message))
        
      }else{
        alert("invalid input")
      }
      
    }



  return (
    <div>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  {console.log("User",user)}

  

    <div class="container register-form">
                <div class="form">
  
  
                    <div class="form-content">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                  <label for="">First Name</label>
                                    <input type="text"  name="fname" value={user.fname} onChange={handleChange} class="form-control" placeholder="First Name *"/>
                                </div>
                                <div class="form-group">
                                  <label for="">Last Name</label>
                                    <input type="text" name="lname" value={user.lname} onChange={handleChange} class="form-control" maxlength="13" placeholder="Last Name"/>
                                </div>
                                <div class="form-group">
                                  <label for="">Email</label>
                                    <input type="email" name="email" value={user.email} onChange={handleChange} class="form-control" placeholder="xyz@abc.com"/>
                                </div>
                                <div class="form-group">
                                  <label for="">Password</label>
                                    <input type="password" name="password" value={user.password} onChange={handleChange} class="form-control" placeholder="Your Password *"/>
                                </div>
                               

                                
                            </div>
  
                        </div>
                        <button type="submit" class="btnSubmit" onClick={register}>Register</button>
                        <div>or</div>
                        <button type="button" class="btnSubmit"><a href="login">Login</a></button>
                        <div>or</div>
                        <button type="button" class="btnSubmit"><a href="adminregistration">Admin registration</a></button>
  
                    </div>
                </div>
            </div>
            
    
 
  </div>
  )
}

export default Registration