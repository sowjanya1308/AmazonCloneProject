import React from 'react';
import { IoCloseSharp } from "react-icons/io5";

const Login = (props) => {

  return (
    <>
      {
        (props.showPopup)?
        <div className='fixed popup-wrapper'>
          <div className='shadow-lg popup-container flex-col rounded justify-center items-center p-5 z-10 bg-white'>
            <button className='absolute top-3 right-4'><IoCloseSharp size={25}/></button>
            <h1 className='text-2xl text-center mb-5 font-bold'>LOGIN</h1>
            <label htmlFor='email' >Email id</label>
            <input className='input-field' id='email' type='email' />
            <label htmlFor='password'>Password</label>
            <input className='input-field' type='password' id='passsword'/>
            <button className='px-3 py-1 bg-blue-600 rounded text-white w-full'>LOGIN</button>
            <a href='/' className='mt-2 text-[13px] text-blue-500 hover:underline'>forgot password?</a>
            <hr className='my-5 border'/>
          </div>
        </div>
        :<></>
      }

    </>
  )
}

export default Login;
