import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OTPInput from 'react-otp-input';
import { useState } from 'react';
import { sendOtp, signUp } from '../services/operations/authAPI';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const VerifyEmail = () => {
    const {otp,setOtp}=useState("");
    const dispatch=useDispatch();

    const navigate=useNavigate();
    const {loading,signupData}=useSelector((state)=>state.auth);

    useEffect(()=>{
        if(!signupData){
            navigate("/signup");
        }
    },[])

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        const{
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        }=signupData;
        dispatch(signUp(accountType,firstName,lastName,email,password,confirmPassword
            ,otp,navigate));
    }
  return (
    <div>
        {
            loading ? (
                <div>
                    Loaing....
                </div>
            ) : (<div>
                <h1>Verify Email</h1>
                <p>A Verification code has been sent to you,Enter the code below</p>
                <form onSubmit={handleOnSubmit}>  
                     <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        renderInput={(props)=><input {...props}/>}
                     />
                     <button type='submit'>
                        Verify Email
                     </button>
                </form >

                <div>
                    <div>
                        <Link to="/login">
                        <p>Back to Login</p>
                        </Link>
                    </div>

                    <button
                    onClick={()=>dispatch(sendOtp(signupData.email))}>
                        Resend it
                    </button>
                </div>




            </div>)
        }
        
    </div>
  )
}

export default VerifyEmail