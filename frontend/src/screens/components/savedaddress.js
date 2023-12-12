import React from 'react';
import watch from "../../images/watch.png";
import { IoLocationOutline } from "react-icons/io5";

const Savedaddress = () => {
  return (
    <>
    <div className="container mx-auto">
        <div className="flex flex-col md:flex-row ml-5 m-5">
            <div className="flex flex-col md:w-1/2 md:pr-8">
                <div>
                    <h1 className="font-semibold text-2xl">Select Your Delivery Address</h1>
                </div>
                <div className='delivery mt-7'>
                    <div className='ml-3'>
                        {/* 1 */}
                        <div className="flex items-center mt-1">
                            <input id="default-radio-1" type="radio" value="Free Delivery by 10/12/2023, order within 2hr 35min" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "/>
                            <label for="default-radio-1" className="ms-2 text-base font-normal text-gray-900"><b>Sowjanya</b> 43-106-1-53/3 GF-105 GREEN MEADOWS APARTMENT, BHARATH MATHA MANDIR ROAD, NANDAMURI NAGAR, SINGHNAGAR, VIJAYAWADA, ANDHRA PRADESH, 520015, India</label>
                        </div>
                        <div className='flex ml-7 m-1'>
                            <div>
                            <a href="/paymentdetails" className="text-blue-600">Edit Address</a>
                            </div>
                            <div className='ml-10'>
                            <a href="/paymentdetails" className="text-red-600">Delete Address</a>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="flex items-center mt-1">
                            <input id="default-radio-1" type="radio" value="Free Delivery by 10/12/2023, order within 2hr 35min" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "/>
                            <label for="default-radio-1" className="ms-2 text-base font-normal text-gray-900"><b>Eswar Aditya</b> D.No: 5-60-1/98, 4/5 ashok nagar, guntur, Andhra pradhesh, GUNTUR, ANDHRA PRADESH, 522006, India</label>
                    </div>
                    <div className='flex ml-7 m-1'>
                        <div>
                        <a href="/paymentdetails" className="text-blue-600">Edit Address</a>
                        </div>
                        <div className='ml-10'>
                        <a href="/paymentdetails" className="text-blue-600">Delete Address</a>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className='m-2 flex items-center'>
                    <div>
                    <IoLocationOutline/> 
                    </div>
                    <div>
                    <a href="/paymentdetail">Use Your Current Location</a>
                    </div>
                </div>
                <div>
                <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-2">Use This Address</button>
                </div>
            </div>

            {/* picture */}
            <div className="md:w-1/2 md:pl-8 mt-5">
                <h1 className='font-semibold text-2xl'>Order Summary</h1>
                <div className="img flex h-auto w-auto shadow-2xl">
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
                    </div>
                </div>
            </div>
            {/* picture */}
        </div>
        {/* payment */}
        <div className='flex flex-col ml-5'>
            <div>
                <h1 className="font-semibold text-2xl">Payment Details</h1>
            </div>
            <div className='payment mt-3'>
                hello
            </div>
        </div>
    </div>
   
    </>
  )
}

export default Savedaddress;
