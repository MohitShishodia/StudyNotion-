import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useState } from 'react';

 const ForgotPassword = () => {

    const [emailSent,setEmailSent]=useState(false);
    const[email,setEmail]=useState("");
    const {loading}=useSelector((state)=>state.auth);

    const handleOnSubmit=()=>{
        e.preventDefault();
        dispatch(getPasswordResetToken(email,setEmailSent));
    }
  return (
    <div className='text-white justify-center'>
        {
            loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h1>
                        {
                            !emailSent?"Reset Your Password ":"Check Your Email"
                        }
                    </h1>
                    
                    <p>
                        {
                            !emailSent?"Have no fear,We'll email you instructions to reset uour password.":`we have sent the reset email to ${email}`
                        }
                    </p>


                    <form onSubmit={handleOnSubmit}>
                        {
                            !emailSent && (
                                <label>
                                    <p>Email Address </p>
                                    <input
                                        required
                                        type='email'
                                        name='email'
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        placeholder='Enter Your Email Address'
                                    />
                                    
    
                                </label>
                            )
                        }

                        <button type='submit'>
                            {
                                !emailSent?"Reset Password":"Resend Email"
                            }
                        </button>
                    </form>

                    <div>
                        <Link to="/login">
                            <p>Back to Login</p>
                        </Link>
                    </div>


                </div>
            ) 
        }
    </div>
  )
}


export default ForgotPassword