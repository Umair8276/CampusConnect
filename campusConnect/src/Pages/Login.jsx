import React, { useState } from 'react'
import "../Styles/Login.css";
import login2 from "../assets/login2.svg";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';

const Login = () => {
  const [btn,setBtn] = useState("")
  return (
    <div className={btn == "sign-up-mode" ? "container sign-up-mode" : "container"}>
    <div className="forms-container">
      <div className="signin-signup">
        <form action="#" className="sign-in-form">
          <h2 className="title">Sign in</h2>
          <div className="input-field">
           <PersonIcon/>
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <LockIcon/>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Login" className="btn solid" />
         
        </form>
        <form action="#" className="sign-up-form">
          <h2 className="title">Sign up</h2>
          <div className="input-field">
             <PersonIcon/> 
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-field">
            <EmailIcon/>
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-field">
          <LockIcon/>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" className="btn" value="Sign up" />
        </form>
      </div>
    </div>

    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>New here ?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>
          <button className="btn transparent" id="sign-up-btn" onClick={() => setBtn("sign-up-mode")}>
            Sign up
          </button>
        </div>
        <img src={login2} className="image" alt="" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>One of us ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laboriosam ad deleniti.
          </p>
          <button className="btn transparent" id="sign-in-btn" onClick={() => setBtn("")}>
            Sign in
          </button>
        </div>
        <img src={login2} className="image" alt="" />
      </div>
    </div>
  </div>
  )
}

export default Login
