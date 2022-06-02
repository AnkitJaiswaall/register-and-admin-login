import React ,{useState}from 'react'
import axios from 'axios'
import "./login.css"


const Login = () => {

    const[user,setUser]=useState({
       
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

    const login=()=>{
        axios.post("http://localhost:3001/login",user).then(res=>alert(res.data.message))
    }

  return (
    <div>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    {console.log("user",user)}

   
      <div class="container register-form">
                  <div class="form">


                      <div class="form-content">
                          <div class="row">
                              <div class="col-md-6">

                                  <div class="form-group">
                                    <label for="">Email</label>
                                      <input type="email" name="email" value={user.email} onChange={handleChange} class="form-control" placeholder="xyz@abc.com"/>
                                  </div>
                                  <div class="form-group">
                                    <label for="">Password</label>
                                      <input type="password" name="password"  value={user.password} onChange={handleChange} class="form-control" placeholder="Your Password *"/>
                                  </div>
                              </div>

                          </div>

                          <button type="submit" onClick={login} class="btnSubmit">Login</button>
                      </div>
                  </div>
              </div>
     
   
</div>
  )
}

export default Login