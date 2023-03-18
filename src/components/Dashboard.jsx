import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as api from "./api/api"

function Dashboard() {

  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('security_token');
  const [tokenStatus, setTokenStatus] = useState(false);
  const navigate = useNavigate();
  const [userType, setUserType] = useState("")
  const checkUser = async () =>{
    if(!token){
      navigate("/")
    }
    let sendData = {
      userId: userId,
    }
    const res = await api.checkUserType(sendData)
    if(res.data.success){
      setUserType(res.data.user.userType)
      console.log(res.data.user.userType)
      if(res.data.user.userType === "Student"){
        navigate("/student-dashboard")
      }
    }
  }

  
  useEffect(() => {
    checkUser();
    
    
  }, [userId])
  return <div>Dashboard</div>;
}

export default Dashboard;
