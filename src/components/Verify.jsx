
import React,{ useState } from 'react'
import { useNavigate } from "react-router-dom";
import * as api from "./api/api"
const Verify = () => {

    const navigate = useNavigate();
  const [otp, setOtp] = useState("")
  const submitOtp = async () =>{
    try {
        let sendData = {
            otp: otp
        }
        const res = await api.mailVerification(sendData)
        if(res.data.success){
            navigate("/")
        }
    } catch (error) {
        navigate("/verify")
    } 
  
  }
  return (
    <div className="auth-form-container">
      <h2>Submit Otp</h2>
      <div className="login-form">
        <label htmlFor="otp">otp</label>
        <input
          onChange={(e) => setOtp(e.target.value)}
          type="text"
          placeholder="******"
        />
        
        <button type="submit" onClick={submitOtp}>Submit</button>
      </div>
    </div>
  )
}

export default Verify