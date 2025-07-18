import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {Link, useNavigate} from "react-router-dom"

function SignUpForm({setIsLoggedIn}) {

    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccoutnType] = useState("student");


    const navigate = useNavigate();

    function changeHandler(event){

        setFormData((prevData) =>({
            ...prevData,
            [event.target.name]:event.target.value
        }))

    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account created");
        navigate("/dashboard")
    }
  return (
    <div>

        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button className={`${accountType === 'student' ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={() => setAccoutnType('student')}>Student</button>
            <button className={`${accountType === 'instructor' ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={() => setAccoutnType('instructor')}>Instructor</button>
        </div>

        <form onSubmit={submitHandler}>

            <div className='flex gap-x-4 mt-4'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                    <input required type='text' name='firstname' onChange={changeHandler} placeholder='Enter first name' value={formData.firstname}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-500'></input>
                </label>

                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                    <input required type='text' name='lastname' onChange={changeHandler} placeholder='Enter last name' value={formData.lastname}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-500'></input>
                </label>
            </div>

            <div className='w-full mt-4'>
                <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email address<sup className='text-pink-200'>*</sup></p>
                        <input required type='email' name='email' onChange={changeHandler} placeholder='Enter email' value={formData.email}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-500'></input>
                </label>
            </div>
            


           <div className='flex gap-x-4 mt-4'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create password<sup className='text-pink-200'>*</sup></p>
                    <input required type={showPassword ? ('text') : ('password')} name='password' onChange={changeHandler} placeholder='Enter password' value={formData.password}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-500'></input>
                    <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm password<sup className='text-pink-200'>*</sup></p>
                    <input required type={showConfirmPassword ? ('text') : ('password')} name='confirmPassword' onChange={changeHandler} placeholder='Confirm password' value={formData.confirmPassword}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-500'></input>
                    <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
                    </span>
                </label>
           </div>

           <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full'>Create account</button>
        </form>

    </div>
  )
}

export default SignUpForm