import React from 'react';
import { IoPersonCircleOutline, IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <>
      <nav class="bg-fuchsia-900">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              
              <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                
                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                
                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center">
                <img class="h-10 w-auto" src={logo} alt="Your Company"/>
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  
                  <a href="#" class="bg-fuchsia-950 text-white rounded-md px-3 py-2 text-sm font-medium">Categories</a>
                  <a href="#" class="text-white hover:bg-fuchsia-950 hover:text-white rounded-md px-3 py-2 text-sm font-medium">New Releases</a>
                  <a href="#" class="text-white hover:bg-fuchsia-950 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Buy Again</a>
                  <a href="#" class="text-white hover:bg-fuchsia-950 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Wishlist</a>
                </div>
              </div>
              <div className='pl-28'>  
                <form>
                    <div class="flex">
                        <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center rounded-s-lg text-gray-900 bg-gray-100 border" type="button">All categories </button>
                        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                            </li>
                            <li>
                                <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                            </li>
                            </ul>
                        </div>
                        <div class="relative w-full">
                            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300" placeholder="Search" required/>
                            <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full rounded-e-lg border focus:ring-4 focus:outline-none">
                            <IoSearchOutline/>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>

              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                <div className='relative ml-2'>
                  <button type="button" class="relative rounded p-1 text-gray-400 hover:bg-fuchsia-950 focus:outline-none">
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">View notifications</span>
                    <IoIosNotificationsOutline className='text-white text-2xl'/>
                  </button>
                </div>
                
                <div class="relative ml-3">
                  <div>
                    <button type="button" class="relative flex text-sm focus:outline-none rounded hover:bg-fuchsia-950" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span class="absolute -inset-1.5"></span>
                      <span class="sr-only">Open user menu</span>
                      <IoPersonCircleOutline className='text-white text-2xl'/>
                    </button>
                  </div>
                </div>
                
                <div class="relative ml-4">
                  <div>
                    <button type="button" class="relative flex text-sm focus:outline-none rounded hover:bg-fuchsia-950" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                      <span class="absolute -inset-1.5"></span>
                      <span class="sr-only">Open user menu</span>
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
