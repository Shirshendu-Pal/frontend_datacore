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

  return (
    <div className="auth-form-container">
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
      <button className="link-btn" onClick={() => navigate('register')}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};
