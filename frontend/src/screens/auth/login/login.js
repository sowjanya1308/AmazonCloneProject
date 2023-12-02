import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";

const Login = (props) => {

  const [signup, setSignup] = useState(false);

  return (
    <>
      {
        (props.showPopup)?
        <div className='fixed popup-wrapper'>
          <div className='shadow-lg popup-container flex-col rounded justify-center items-center p-5 z-10 bg-white'>
            <button onClick={props.close} className='absolute top-3 right-4'><IoCloseSharp size={25}/></button>
            <h1 className='text-2xl text-center mb-5 font-bold'>{(signup)?"SIGNUP":"LOGIN"}</h1>
            {
              (signup)?
              <>
              <label htmlFor='name' >Name</label>
              <input className='input-field mb-4' id='name' type='text' />
              </>
              :<></>
            }
            
            <label htmlFor='email' >Email</label>
            <input className='input-field mb-4' id='email' type='email' />
            <label htmlFor='password'>Password</label>
            <input className={`input-field ${(signup)?"mb-4":""}`} type='password' id='passsword'/>
            {
              (signup)?
              <>
              <label htmlFor='cpass'>Confirm Password</label>
              <input className='input-field mb-4' type='password' id='cpass'/>
              </>
              :<></>
            }
            {(signup)?<></>:<a href='/' className='text-[13px] text-blue-500 hover:underline'>forgot password?</a>}
            {
              (signup)?
            <button className='px-3 py-1 bg-rose-600 h-[35px] rounded text-white w-full mt-4'>SIGNUP</button>
            :<button className='px-3 py-1 bg-rose-600 h-[35px] rounded text-white w-full mt-4'>LOGIN</button>
            }
            <hr className='my-5 border'/>
            <p onClick={(signup)?()=>setSignup(false):()=>setSignup(true)} className='text-center'>{(signup)?"Already a Member?":"Not a Member?"} <span className='text-blue-600 hover:underline cursor-pointer'>{(signup)?"login":"Signup now"}</span></p>
          
          </div>
        </div>
        :<></>
      }

    </>
  )
}

export default Login;
