import React from 'react';
import watch from "../../images/watch.png";
import { TiStarFullOutline } from "react-icons/ti";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";


const Product = () => {
  return (
    <>
      <div className='flex'>
        <div className='p-24'>
            <img src={watch} alt ="img"/>
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
                <h1 className="text-2xl font-light">MRP: ₹9145 <span></span></h1>
                <h1 className="text-xl line-through font-light text-rose-600">₹9695</h1>
            </div>
            <div className='flex'>
                <div>
                    <h1 className='pt-9 text-2xl font-medium'>Product Details</h1>
                    <ul className='pt-3'>
                        <li><b>Color:</b> Green</li>
                        <li><b>Material Type:</b> Leather</li>
                        <li><b>Watch Moment Type:</b> Quartz</li>
                        <li><b>Item Weight: </b>190 Grams</li>
                        <li><b>Country of origin: </b>India</li>
                    </ul>
                </div>
                <div className='pt-9 ml-36 flex'>
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
    </>
  )
}

export default Product;
