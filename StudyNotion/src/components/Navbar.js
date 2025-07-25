import React from 'react';
import Logo from "../assets/Logo.svg";
import {Link} from "react-router-dom"
import {toast} from 'react-hot-toast';

function NavBar(props) {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

        <Link to="/">
            <img src={Logo} className='' width={160} height={32} loading='lazy' alt="Logo"></img>
        </Link>

        <nav>
            <ul className='flex gap-x-6 text-richblack-100'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex items-center gap-x-4'>
            {   !isLoggedIn &&
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700'>Log in</button>
                </Link>
            }
            {   !isLoggedIn &&
                <Link to="/signup">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700'>Sign up</button>
                </Link>
            }
            {   isLoggedIn &&
                <Link to="/">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700' onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged out");
                    }}>Logout</button>
                </Link>
            }
            {   isLoggedIn &&
                <Link to="/dashboard">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700'>Dashoard</button>
                </Link>
            }
        </div>
       
    </div>
  )
}

export default NavBar