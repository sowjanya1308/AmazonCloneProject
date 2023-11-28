import React from 'react';
import "./login.css";

const Login = () => {

  const toggleBtn = (e) => {
    document.getElementById("toggle-icon").classList.toggle("icon-collapse");
    document.getElementById("toggle-icon").classList.toggle("icon-expand");
    var option = document.getElementById("toggle-options");
    (option.style.display === "none")?
    option.style.display = "block"
    :option.style.display = "none"
  }

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
            <div className='border rounded py-[20px] px-[26px] mb-[22px] '>
              <h1 className='font-normal mb-[10px]'>Sign in</h1>
              <div className='mb-3'>
                <label htmlFor='email' className=''>Email or mobile phone number</label>
                <input type='text' id='email' className='border w-full h-[31px] py-[3px] px-[7px] rounded border-[#949494] focus:border-[#007185] input-field' />
              </div>
              <div className='mb-5'>
                <button className='w-[100%] bg-[#FFD814] rounded-[8px] shadow text-xs h-[29px] hover:bg-[#F7CA00]'>Continue</button>
                <div className='mt-5'>
                  <p className='text-xs'>By continuing, you agree to Amazon's <a href='/' className='link'>Conditions of Use</a> and <a href='/' className='link'>Privacy Notice</a>.</p>
                </div>
              </div>
              <div className='mb-7'>
                <a href='javascript:void(0)' onClick={toggleBtn} id='toggle' className='link relative pl-[11px]'>
                  <i id='toggle-icon' className='icon-expand'></i>
                  <span className='font-medium '>Need help?</span>
                </a>
                <div id='toggle-options' style={{ "display": "none" }}>
                  <div>
                    <a href='/' className='link'>
                      <span className='pl-[11px] font-medium' >Forgot Password</span>
                    </a>
                  </div>
                  <div>
                    <a href='/' className='link'>
                      <span className='pl-[11px] font-medium'>Other issues with Sign-In</span>
                    </a>
                  </div>
                </div>
              </div>
              <hr className='mb-3'/>
              <div>
                  <div className='mb-1'>
                    <span className='font-bold text-[13px]'>Buying for work?</span>
                  </div>
                  <a href='/' className='link'>Shop on Amazon Business</a>
              </div>
            </div>
            {/* new to amazon */}
            <div className='divider'>
              <h5>New to Amazon?</h5>
            </div>
            <div className='btn h-[29px] border rounded-[8px] block'>
              <a href='/' className='button-text'>Create your Amazon account</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
