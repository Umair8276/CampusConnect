import React, { useContext, useState } from 'react'
import wave from "../assets/wave.png"
import bg from "../assets/bg.svg"
import avatar from "../assets/avatar.svg"
import "../Styles/Signup.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import { AppContext } from './../Context/AuthContext';
import axios from 'axios';


const StLogin = () => {
  const [error,setError] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {dispatch} = useContext(AppContext)

  const login = (e) => {
    console.log( email,password)
    if(!email || !password){ 
      setError("Please fill the Credential")
      setTimeout( () => {
        setError("")
      },2000)
      
    }

     axios.post("http://localhost:5000/api/stu/login",{
      email,
      password
     }).then(res => {
      console.log(res.data)
      dispatch({type:"LOGIN" ,payload:res.data.user})
     }).catch(err => {
      setError(err)
      console.log(err)
     })
  }
  
  return (
    <>

      <img className="wave" src={wave} />
      <div className="containerr">
        <div className="img">
          <img src={bg} />
        </div>
        <div className="formContainer">
          {/* <form>
				<img src={avatar}/>
				<h2 className="title">Welcome</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<h5>Username</h5>
           		   		<input type="text" className="input"/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<h5>Password</h5>
           		    	<input type="password" className="input"/>
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" className="btn" value="Login"/>
            </form> */}


          <div className='top'>
            <img src={avatar} style={{ width: "200px", height: "200px" }} />
            <h2 style={{ textAlign: "center", fontSize: "45px" }}>Welcome</h2>

            {
            error?
            <div style={{backgroundColor:"#EAB543",padding:"0.8rem",borderRadius:"5px",width:"55%"}}>
            <h4 style={{color:"red"}}>{error}</h4>
            </div>
            :
            <div></div>
          }

            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '40ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div style={{display:"flex",alignItems:"center"}}>
              <EmailIcon/>
              <TextField id="filled-basic" label="Email" value={email} onChange={(e) =>setEmail(e.target.value)} variant="filled"  />
              </div>

              <div style={{display:"flex",alignItems:"center"}}>
              <HttpsIcon/> 
              <TextField id="filled-basic" label="Password" value={password} variant="filled" onChange={(e) =>setPassword(e.target.value)} />
              </div>
              <div >
              <a href="#">Forgot Password?</a>
            	<input className="btnn" value="Login" onClick={() =>login()}/>
              </div>
            
            </Box>

          </div>
        </div>
      </div>

    </>
  )
}

export default StLogin
