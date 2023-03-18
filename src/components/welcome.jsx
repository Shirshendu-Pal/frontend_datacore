import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as api from "./api/api"

const baseURL = 'http://localhost:5000/token_verify';
function Welcome() {
  const userId = localStorage.getItem('userId');
  const [tokenStatus, setTokenStatus] = useState(false);
  const navigate = useNavigate();
  const [userType, setUserType] = useState("")


  

  // console.log(tokenStatus);
  if (tokenStatus) {
    return (
      <>
        <div>Welcome to admin dashboard</div>
      </>
    );
  }
}

export default Welcome;
