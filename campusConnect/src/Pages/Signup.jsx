import React, { useState } from 'react'
import "../Styles/Login.css"
import "../Styles/Login.css";
import login2 from "../assets/login2.svg";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    const signUp = () => {
        navigate("/faculty");
        if(!userName || !password){
          alert("Please Enter username nad password ")
          return
        }
         axios.post("",{
          userName,
          password,
          email
         }).then(res => {
          console.log(res.data)
         }).catch(err => {
          console.log(err)
         })
      }

  return (
    <div className='forms-container'>
        <form action="#" className="sign-up-form">
          <h2 className="title">Sign up</h2>
          <div className="input-field">
             <PersonIcon/> 
            <input type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div className="input-field">
            <EmailIcon/>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-field">
          <LockIcon/> 
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <input type="submit" className="btn" onClick={signUp} value="Sign up" />.
        </form>
    </div>
  )
}

export default Signup
