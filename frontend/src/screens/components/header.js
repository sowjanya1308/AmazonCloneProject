import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <div className='header'>
        <div className='text-left mb-[18px]'>
            <a href='/' className='text-left' tabIndex={-1}>
              <i className='logo h-[31px] w-[103px] align-top me-1 inline-block'></i>
            </a>
        </div>
        <div>
        <i className='basket h-[31px] w-[103px] me-1 '></i>
        <i className='h-25 w-50'></i>
        </div>
        <nav aria-label="Main navigation" className='navbar navbar-expand-lg navbar-light bg-white' />
    </div>
  )
}

export default Header;
