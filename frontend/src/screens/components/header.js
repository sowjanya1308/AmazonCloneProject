import React, { useState, lazy, Suspense } from 'react';
import { IoPersonCircleOutline, IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from "../../images/logo.png";
import {useSelector,useDispatch} from "react-redux"
import { NavLink } from 'react-router-dom';
import { authLogout } from '../../redux/userRelated/userSlice';

const Login = lazy(()=>import('../auth/login/login'));

const Header = () => {
  const [popup, setPopup] = useState(false);

  const {loading, response, userDetails, loggedin} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const showPopup=()=>{
    switch(popup){
      case true:{
        setPopup(false);
        return
      }
      case (false):{
        setPopup(true);
        return
      }
      default:{
        setPopup(false);
        return
      }
    }
  }

  const closepopup=()=>setPopup(false);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar=()=>{
    switch(popup){
      case true:{
        setSidebar(false);
        return
      }
      case (false):{
        setSidebar(true);
        return
      }
      default:{
        setSidebar(false);
        return
      }
    }
  }

  const closeSidebar=()=>{
    document.getElementById("sidebar").classList.remove("animate-sidebar");
    document.getElementById("sidebar").classList.add("close-sidebar");
    setTimeout(function(){
      document.getElementById("sidebar").classList.remove("close-sidebar");
      setSidebar(false);
    },350)
    // setSidebar(false);
  }

  const SideBar=()=>{
    return (
      <>
        <div className='popup-wrapper' style={{"display":(sidebar)?"block":"none"}}>
          <div id='sidebar' className='animate-sidebar absolute bg-white text-black z-10 h-[100vh] w-[40vw] top-0 left-0 rounded p-5'>
          <div className='flex justify-end'>
              <button onClick={closeSidebar} className='rounded-full bg-white p-2 shadow-lg'>
                <svg className=" h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className='mt-5'>
              <li><a href="/" className="text-white bg-fuchsia-950 rounded-md px-3 py-2 text-sm font-medium w-fit flex items-center single-line mb-2">Categories</a></li>
              <li><a href="/newreleases" className="hover:bg-fuchsia-950 hover:text-white rounded-md px-3 py-2 text-sm font-medium w-fit flex items-center single-line mb-2">New Releases</a></li>
              <li><a href="/" className="hover:bg-fuchsia-950 hover:text-white rounded-md px-3 py-2 text-sm font-medium w-fit flex items-center single-line mb-2">Buy Again</a></li>
              <li><a href="/wishlist" className="hover:bg-fuchsia-950 hover:text-white rounded-md px-3 py-2 text-sm font-medium w-fit flex items-center single-line mb-2">Wishlist</a></li>
            </ul>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <nav className="bg-fuchsia-900 sticky top-0 z-10">
        <div className="mx-auto flex justify-between  px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center">
            <div className="flex items-center lg:hidden mr-2">
              
              <button onClick={()=>setSidebar(true)} type="button" className=" inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className=" -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <SideBar/>
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex items-center mr-2">
                <img className="h-10 max-w-[15rem]" src={logo} alt="Your Company" loading='lazy'/>
              </div>
              <div className="hidden md:ml-6 lg:block">
                <div className="flex gap-2">
                  <a href="/" className="text-white bg-fuchsia-950 rounded-md px-3 py-2 text-sm font-medium w-fit flex items-center single-line">Categories</a>
                  <a href="/newreleases" className="text-white hover:bg-fuchsia-950 hover:text-white rounded-md px-3 py-2 text-sm font-medium w-fit flex items-center single-line">New Releases</a>
                  <a href="/" className="text-white hover:bg-fuchsia-950 hover:text-white rounded-md px-3 py-2 text-sm font-medium w-fit flex items-center single-line">Buy Again</a>
                  <a href="/wishlist" className="text-white hover:bg-fuchsia-950 hover:text-white rounded-md px-3 py-2 text-sm font-medium w-fit flex items-center single-line">Wishlist</a>
                </div>
              </div>
            </div>
          </div>
          <div className='flex ml-4 items-center w-full'>
              <div className="w-full">
                  <div className="relative w-full">
                      <input className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300" placeholder="Search" required/>
                      <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full rounded-lg border focus:ring-4 focus:outline-none">
                      <IoSearchOutline/>
                      </button>
                  </div>
              </div>
          </div>
          <div className="flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                <div className='relative ml-2'>
                  <button type="button" className="relative rounded p-1 text-gray-400 hover:bg-fuchsia-950 focus:outline-none">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">View notifications</span>
                    <IoIosNotificationsOutline className='text-white text-2xl'/>
                  </button>
                </div>
                
                <div className="relative ml-3 ">
                  <div className={`${(loggedin)&&'open-menu'} relative`}>
                    <button onClick={(!loggedin)?showPopup:null} type="button" className="relative flex text-sm focus:outline-none rounded hover:bg-fuchsia-950" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <IoPersonCircleOutline className='text-white text-2xl '/>
                    </button>
                    <div className='absolute menu bg-white rounded-md px-5 py-2 flex flex-col whitespace-nowrap z-30'>
                        <p className='py-2 text-lg font-semibold border-b-2 border-x-blue-400'>{userDetails.name}</p>
                        <ul>
                          <NavLink className=''><li className='hover:bg-slate-100 rounded-md p-2 border-b-2 border-x-blue-400'>Orders</li></NavLink>
                          <NavLink className=''><li className='hover:bg-slate-100 rounded-md p-2 border-b-2 border-x-blue-400'>Cart</li></NavLink>
                          <NavLink onClick={()=>dispatch(authLogout())}><li className='hover:bg-slate-100 rounded-md p-2'>Logout</li></NavLink>
                        </ul>
                    </div>
                    
                    <Suspense fallback={<><h1>Loading...</h1></>}>
                      {(!loggedin)&&<Login showPopup={popup} close={closepopup}/>}
                    </Suspense>
                    
                  </div>
                </div>
                
                <div className="relative ml-4">
                  <div>
                    <button type="button" className="relative flex text-sm focus:outline-none rounded hover:bg-fuchsia-950" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <IoBagHandleOutline className='text-white text-2xl'/>
                    </button>
                  </div>
                </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Header;
