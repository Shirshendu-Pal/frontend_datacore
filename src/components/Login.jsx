import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// const baseURL = 'http://localhost:5000/login';

import * as api from "./api/api"
export const Login = (props) => {
  // const [user, setUser] = useState({
  //   username: '',
  //   password: '',
  // });
  const [pass, setPass] = useState('');
  const [email, setemail] = useState('');
  const [openDiolouge, setopenDiolouge] = useState(false);
  const [resetModal, setresetModal] = useState(false);
  const [emailModal, setemailModal] = useState("");
  const [otp,setOtp] = useState("");
  const [resetPassWord, setresetPassWord] = useState("");


  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      
      let sendData = {
        email: email,
        password: pass
      }

      const res = await api.userLogin(sendData)
      if(res.data.success){
        console.log(res.data.token.token)
        localStorage.setItem("security_token",res.data.token.token)
        localStorage.setItem("userId",res.data.user._id)
        if(res.data.user.userType === "SAdmin" || res.data.user.userType=== "CollUser"){
          navigate("/admin-dashboard")
        }else{
          navigate("/student-dashboard")
        }
       
      }
    } catch (error) {
      console.log(error)
    }
  };

  const forgetPassword = async () =>{
    setopenDiolouge(true)  
  }

  const submitEmail =async () =>{
    try {
      let sendData = {
        email: emailModal
      }
      const res = await api.forgetPassword(sendData)
      if(res.data.success){
        setresetModal(true)
        setopenDiolouge(false)
      }

      
    } catch (error) {
      console.log(error)
    }
  }


  const submitPassword = async () =>{


    try {
      const sendData = {
        otp: otp,
        password: resetPassWord
      }

      const res = await api.resetPassword(sendData)
      if(res.data.success){
        setresetModal(false)
        setopenDiolouge(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    {!openDiolouge && !resetModal &&<div className="auth-form-container">
      <h2>Login</h2>
      <div className="login-form">
        <label htmlFor="email">email</label>
        <input
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit" onClick={handleSubmit}>Log In</button>
      </div>
      <button className="link-btn" onClick={() => navigate('/register')}>
        Don't have an account? Register here.
      </button>
      <button className="link-btn" onClick={() => 
        forgetPassword()
        }>
        Forgot Password!??
      </button>
    </div>}


        {openDiolouge && !resetModal &&<div className="auth-form-container" style={{justifyContent:"center", width:300, height: 200}}>
        <h2>Submit Email</h2>
        <div className="login-form">
          <label htmlFor="otp">Enter Your Email</label>
          <input
            onChange={(e) => setemailModal(e.target.value)}
            type="text"
            placeholder="something@abc.com"
          />
          
          <button type="submit" onClick={submitEmail}>Submit</button>
        </div>
      </div>}
        {!openDiolouge && resetModal &&<div className="auth-form-container" style={{justifyContent:"center", width:300, height: 200}}>
        <h2>reset password</h2>
        <div className="login-form">
          <label htmlFor="otp">Enter OTP</label>
          <input
            onChange={(e) => setOtp(e.target.value)}
            type="text"
            placeholder="******"
          />
          <label htmlFor="password">Enter Your New Password</label>
          <input
            onChange={(e) => setresetPassWord(e.target.value)}
            type="password"
            placeholder="******"
          />
          
          <button type="submit" onClick={submitPassword}>Submit</button>
        </div>
      </div>}
      </>
  );
};
