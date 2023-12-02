import React, { useState } from 'react';
import { IoPersonCircleOutline, IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from "../../images/logo.png";
import Login from '../auth/login/login';

const Header = () => {
  const [popup, setPopup] = useState(false);

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

  return (
    <>
      <nav className="bg-fuchsia-900">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              
              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-10 w-auto" src={logo} alt="Your Company"/>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  
                  <a href="/" className="text-white bg-fuchsia-950 rounded-md px-3 py-2 text-sm font-medium">Categories</a>
                  <a href="/" className="text-white hover:bg-fuchsia-950 hover:text-white rounded-md px-3 py-2 text-sm font-medium">New Releases</a>
                  <a href="/" className="text-white hover:bg-fuchsia-950 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Buy Again</a>
                  <a href="/" className="text-white hover:bg-fuchsia-950 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Wishlist</a>
                </div>
              </div>
              <div className='pl-28'>  
                <form>
                    <div className="flex">
                        <label for="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center rounded-s-lg text-gray-900 bg-gray-100 border" type="button">All categories </button>
                        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                            </li>
                            </ul>
                        </div>
                        <div className="relative w-full">
                            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300" placeholder="Search" required/>
                            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full rounded-e-lg border focus:ring-4 focus:outline-none">
                            <IoSearchOutline/>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>

              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                <div className='relative ml-2'>
                  <button type="button" className="relative rounded p-1 text-gray-400 hover:bg-fuchsia-950 focus:outline-none">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">View notifications</span>
                    <IoIosNotificationsOutline className='text-white text-2xl'/>
                  </button>
                </div>
                
                <div className="relative ml-3">
                  <div>
                    <button onClick={showPopup} type="button" className="relative flex text-sm focus:outline-none rounded hover:bg-fuchsia-950" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <IoPersonCircleOutline className='text-white text-2xl'/>
                    </button>
                    <Login showPopup={popup} />
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
        </div>
      </nav>
    </>
  )
}

export default Header;
