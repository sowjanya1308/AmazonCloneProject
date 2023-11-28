import React from 'react';
import "./login.css";

const Login = () => {
  return (
    <>
      <div className='py-[14px] px-[18px]'>
        <div className='text-center mb-[18px]'>
            <a href='/' className='text-center' tabIndex={-1}>
              <i className='logo h-[31px] w-[103px] align-top me-1 inline-block'></i>
              <i className='domain h-[28px] w-[14px] align-top inline-block'></i>
            </a>
        </div>
        <div className='w-[700px] mx-auto'>
          <div className='w-[350px] mx-auto'>
            <div className='border rounded py-[20px] px-[26px] '>
              <h1 className='font-normal text-3xl mb-3'>Sign in</h1>
              <div className='mb-3'>
                <label htmlFor='email' className='font-bold text-sm pb-2'>Email or mobile phone number</label>
                <input type='text' id='email' className='border w-full h-[31px] py-[3px] px-[7px] rounded border-[#949494] focus:border-[#007185] input-field' />
              </div>
              <div>
                <button className='w-[100%] bg-[#FFD814] rounded-[8px] shadow text-xs h-[29px] hover:bg-[#F7CA00]'>Continue</button>
                <div className='mt-5'>
                  <p className='text-xs'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
