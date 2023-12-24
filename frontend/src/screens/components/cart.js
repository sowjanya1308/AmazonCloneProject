import React from 'react';
import Header from './header';
import watch from "../../images/watch.png";
import { AiOutlineDelete } from "react-icons/ai";

const Addtocart = () => {
  return (
    <>
      <Header/>
      <div className="container mx-auto p-8 flex">
        {/* flex left */}
        <div>
            <h1 className="text-3xl font-semibold mb-8">Your Cart</h1>

            {/* 1st item */}
            <div className="img flex h-auto max-w-xl shadow-2xl">
                <div className="flex items-center mb-4 ml-5">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                    <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                </div>
                <div className="flex-shrink-0">
                <img src={watch} alt="watch" className="w-32 h-32 ml-6 mt-4 object-cover rounded-xl" />
                </div>

                <div className="flex flex-col flex-grow p-4">
                <div>
                    <h2 className="font-bold text-lg mb-2">Titan Quartz Multifunction White Dial Leather Strap Watch for Men</h2>
                </div>
                <div className="mb-2">MRP: ₹9145</div>

                <div className="flex items-center mb-2">
                    <label htmlFor="quantity" className="mr-2 font-medium">Quantity:</label>
                    <select id="quantity" className="border border-gray-300 rounded-md p-1">
                    <option selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
                </div>

                <div>
                    <button type="button" className="flex items-center text-sm focus:outline-none">
                    <AiOutlineDelete className="text-2xl" />
                    <span className="ml-1">Remove</span>
                    </button>
                </div>
                </div>
            </div>
            {/* 2nd items */}
            <div className="mt-10 img flex h-auto max-w-xl shadow-2xl">
                <div className="flex items-center mb-4 ml-5">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                    <label htmlFor="default-checkbox" className="text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                </div>
                <div className="flex-shrink-0">
                <img src={watch} alt="watch" className="w-32 h-32 ml-6 mt-4 object-cover rounded-xl" />
                </div>
                <div>

                </div>

                <div className="flex flex-col flex-grow p-4">
                <div>
                    <h2 className="font-bold text-lg mb-2">Titan Quartz Multifunction White Dial Leather Strap Watch for Men</h2>
                </div>
                <div className="mb-2">MRP: ₹9145</div>

                <div className="flex items-center mb-2">
                    <label htmlFor="quantity" className="mr-2 font-medium">Quantity:</label>
                    <select id="quantity" className="border border-gray-300 rounded-md p-1">
                    <option selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
                </div>

                <div>
                    <button type="button" className="flex items-center text-sm focus:outline-none">
                    <AiOutlineDelete className="text-2xl" />
                    <span className="ml-1">Remove</span>
                    </button>
                </div>
                </div>
            </div>
        </div>

        {/* flex right */}
        <div className='ml-auto'>
            <div className="flex flex-col justify-end">
                <div>
                <h1 className="text-2xl font-normal">Subtotal: <b>₹18290</b></h1>
                </div>
                <div className="mt-4">
                <button className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 text-white font-medium rounded-lg text-sm px-5 py-2.5">Checkout</button>
                </div>
            </div>
        </div>
    </div>

        

    </>
  )
}

export default Addtocart;
