import React from "react";
import TextField from '@mui/material/TextField';
import "./login.css";

function Login() {

  /*const google = ()=> {
    window.open("http://localhost:5000/auth/google", "_self")
  }
  */
  return (
    <div className="login_container">
      <h1>Choose a Login Method</h1>
      <div className="signin-form">
         
        <div className="left">
          <div className="loginBtn facebook">
            <img src="./images/facebook.png" alt=""></img>
            <p>Facebook</p>
          </div>
          <div className="loginBtn google" >
            <img src="./images/google.png" alt=""></img>
            <p>Google</p>
          </div>

          <div className="loginBtn twitter">
            <img src="./images/twitter.png" alt=""></img>
            <p>Twitter</p>
          </div>
        </div>
        
        <div className="center">
          <div className="line"></div>
          <div className="or">OR</div>
        </div>
        
        <div className="right">
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <button className="submit_btn">Login</button>
        </div>
        
      </div>
    </div>
  );
}

export default Login;
