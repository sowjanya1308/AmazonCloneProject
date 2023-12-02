import React from 'react';
import watch from "../../images/watch.png";
import watch1 from "../../images/watch1.png";
import watch2 from "../../images/watch2.png";
import watch3 from "../../images/watch3.png";
import { TiStarFullOutline } from "react-icons/ti";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import Header from "../components/header";

const Product = () => {
  return (
    <>
      <Header/>
      <div className='flex'>
        <div className='p-20'>
            <img src={watch} alt ="img"/>
            <div class="grid grid-cols-4 gap-2">
                <div className='pt-4'>
                    <img src={watch} alt ="img" className='h-[110px] w-[150px]'/>
                </div>
                
                <div className='pt-4'>
                <img src={watch1} alt ="img" className='h-[110px] w-[150px]'/>
                </div>
                
                <div className='pt-4'>
                <img src={watch2} alt ="img" className='h-[110px] w-[150px]'/>
                </div>
                
                <div className='pt-4'>
                <img src={watch3} alt ="img" className='h-[110px] w-[150px]'/>
                </div>
                
            </div>
        </div>
        <div className='p-24'>
            <h1 className='text-4xl font-semibold'>Titan Quartz Multifunction White Dial Leather Strap Watch for Men</h1>
            <div className='flex pt-8'>
                <div>
                    <h1 className="text-2xl font-normal">⭐⭐⭐⭐⭐</h1>
                </div>
                <div className='ml-36'>
                    <h1 className="text-xl text-center font-normal deal h-[30px] w-[60px] text-white animate-bounce">Deal</h1>
                </div>
            </div>
            <div className='pt-4'>
                <h1 className="text-2xl font-Medium">MRP: ₹9145 <span></span></h1>
                <h1 className="text-xl line-through font-normal text-rose-600">₹9695</h1>
            </div>
            <div>
                <div>
                    <div className='pt-9 flex'>
                        <div>
                        <h1 className=' text-2xl font-medium'>Product Details</h1>
                        <ul className='pt-3 list-disc'>
                            <li><b>Color:</b> Green</li>
                            <li><b>Material Type:</b> Leather</li>
                            <li><b>Watch Moment Type:</b> Quartz</li>
                            <li><b>Item Weight: </b>190 Grams</li>
                            <li><b>Country of origin: </b>India</li>
                        </ul>
                        </div>
                        <div className='pt-9 ml-20 flex'>
                            <div>
                                <label for='quantity' className='font-medium '>Quantity: </label>
                                <select id='quantity'>
                                <option selected>1</option>
                                <option value="US">2</option>
                                <option value="CA">3</option>
                                <option value="FR">4</option>
                                <option value="DE">5</option>
                                </select>

                            </div>
                            <div className='ml-6'>
                            <button type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add To Cart</button>
                            </div>
                            <div className='ml-6'>
                            <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Check Out</button>
                            </div>
                        </div>
                    </div>
                    <div className='pt-9 flex'>
                        <div>
                        <h1 className='pt-2 text-2xl font-medium'>About this item</h1>
                        <ul className='pt-3 list-decimal'>
                            <li>Dial Color: White, Case Shape: Round, Dial Glass Material: Mineral</li>
                            <li>Band Color: Green, Band Material: Leather</li>
                            <li>Watch Movement Type: Quartz, Watch Display Type: Analog</li>
                            <li>Case Material: Stainless Steel, Case Diameter: 50 millimeters</li>
                            <li>Water Resistance Depth: 50 meters, Lock Mechanism: Buckle</li>
                            <li>24 Months manufacturer warranty on manufacturing defects</li>
                        </ul>
                        </div>
                        <div>
                            <div className='pt-9 ml-36 flex '>
                                <div>
                                    <h1><CiDeliveryTruck className='text-3xl'/> Free delivery</h1>
                                </div>
                                <div className='ml-10'>
                                    <h1><GiReturnArrow className='text-3xl'/> Easy Return</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
      </div>
    </>
  )
}

export default Product;
