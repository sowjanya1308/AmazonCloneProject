import React from 'react';
import {IoPersonCircleOutline } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";

const Reviews = () => {
  return (
    <>
        <div className=' msgs h-[150px] w-[380px] shadow-2xl '>
            <div className='flex flex-col'>
                <div className='flex'>
                    <div className='align-baseline'>
                      <IoPersonCircleOutline/>
                    </div>
                    <div>
                       <h1 className='font-medium'>Sowjanya</h1>
                    </div>
                </div>
                <div className='pl-2'>
                    <h1 className='font-normal'>- Reviewd on 30 Nov 2023</h1>
                    <h1>⭐⭐⭐⭐⭐</h1>
                </div>
                <div>
                    <h1 className='pl-2 font-medium'>True to the money. Definitly worth for buying</h1>
                    <div className='flex'>
                        <div className='pt-2 pl-2 '>
                        <button type="button" className="shadow-lg hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Helpful</button>
                        </div>
                        <div className='pt-2 pl-2'>
                        <button type="button" className=" shadow-lg hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Report</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Reviews;
