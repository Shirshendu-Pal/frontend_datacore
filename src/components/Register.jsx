import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// const baseURL = "http://localhost:5000/register";
import * as api from "./api/api"
const Register = (props) => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confpass, setConfPass] = useState('');
  const [userType, setuserType] = useState('');
  const [mobile, setmobile] = useState('');
  const [status, setstatus] = useState('');
  const [name, setname] = useState('');



  const handleSubmit  =async () => {
    try {
     
      let sendData = {
        userType:userType,
        name:name,
        email:email,
        mobile:mobile, 
        password: pass,
        status:status
      }

      console.log(sendData)

      //calling api 

      const res = await api.userRegister(sendData)
      if(res.data.success){
        navigate('/verify')
      } 
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <div className="register-form">

        <label htmlFor="name">Name</label>
        <input
          name="name"
          onChange={(e) => setname(e.target.value)}
          id="name"
          placeholder="Name"
        />

        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value) }
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />

        <label htmlFor="mobile">Mobile</label>
        <input
          name="mobile"
          onChange={(e) =>
            setmobile(e.target.value)
          }
          id="mobile"
          placeholder="Mobile"
        />

        <label htmlFor="password">Password</label>
        <input
          onChange={(e) =>
            setPass(e.target.value)
          }
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />

        <label htmlFor="conf_pass">Confirm Password</label>
        <input
          onChange={(e) =>
            setConfPass(e.target.value)
          }
          type="password"
          placeholder="********"
          id="conf_pass"
          name="conf_pass"
        />
        <label htmlFor="user_type">User Type</label>
        <select  onChange={(e) =>
           setuserType(e.target.value)
          }  
          id="user_type"
          name="user_type">
            <option value="SAdmin">Super Admin</option>
            <option value="CollUser">College User</option>
            <option value="Student">Student</option>
        </select>
        <br/>
        <button type="button" onClick={handleSubmit}>Sign Up</button>
      </div>
      <button className="link-btn" onClick={() =>  navigate('/')}>
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default Register
