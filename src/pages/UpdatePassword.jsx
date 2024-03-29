import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { resetPassword } from '../services/operations/authAPI'

const UpdatePassword = () => {
  const dispatch=useDispatch();
  const location=useLocation();
  //for handle change
  const[formData,setFormData]=useState({
    password:"",
    confirmPassword:"",
  })
    const {loading}=useSelector((state)=>state.auth);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
    //create a flag because input filed can be text or password
    const[showPassword,setShowPassword]=useState(false);

    const {password,confirmPassword}=formData;

    const handleOnChange=(e)=>{
      setFormData((prevData)=>(
        {
            ...prevData,
            [e.target.name]:e.target.value,
        }
      ))
    }

    const handleOnSubmit=()=>{
      e.preventDefault();
      const token=location.pathname.split('/').at(-1);
      dispatch(resetPassword(password,confirmPassword,token));
    }
     
  return (
    <div>
      {
        loading ? (
          <div>
            Loading....
          </div>
        ) : (
          <div>
            <h1>Choose New Password</h1>
            <p>Almost done,Enter your new password and youre all set</p>
            <form onSubmit={handleOnSubmit}>
              <label>
                <p>New Password</p>
                <input 
                  required
                  type={showPassword ? "text":"password"}
                  name='password'
                  value={password}
                  onChange={handleOnChange}
                  placeholder=' Password'
                />
                <span
                  onClick={()=>setShowPassword((prev)=>!prev)}
                >
                  {
                    showPassword
                    ?<AiFillEyeInvisible fontSize={24}/>
                    :<AiFillEye fontSize={24}/>
                  }
                </span>
              </label>

              <label>
                <p> Confirm New Password</p>
                <input 
                  required
                  type={showConfirmPassword ? "text":"password"}
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={handleOnChange}
                  placeholder='Confirm Password'
                />
                <span
                  onClick={()=>setShowConfirmPassword((prev)=>!prev)}
                >
                  {
                    showConfirmPassword
                    ?<AiFillEyeInvisible fontSize={24}/>
                    :<AiFillEye fontSize={24}/>
                  }
                </span>
              </label>

              <button type='submit'>
                Reset Passowrd
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


export default UpdatePassword