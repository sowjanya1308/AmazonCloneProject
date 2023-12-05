import React from 'react';
import {IoPersonCircleOutline } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";

const Reviews = () => {
  return (
    <>
        <div className=' msgs h-auto w-auto shadow-lg bg-white p-3'>
            <div className='flex flex-col'>
                <div className='flex items-center mb-2'>
                    <div className='align-baseline me-2'>
                      <IoPersonCircleOutline size={25}/>
                    </div>
                    <div>
                       <h1 className='font-medium'>Sowjanya</h1>
                    </div>
                </div>
                <div className='pl-2 mb-2'>
                    <h1 className='font-normal mb-2'>- Reviewd on 30 Nov 2023</h1>
                    <h1>⭐⭐⭐⭐⭐</h1>
                </div>
                <div>
                    <h1 className='pl-2 font-medium mb-2'>True to the money. Definitly worth for buying</h1>
                    <div className='flex'>
                        <div className='pt-2 pl-2 '>
                        <button type="button" className=" hover:opacity-80 font-medium rounded-lg bg-blue-400 text-sm px-5 py-2.5 me-2 mb-2">Helpful</button>
                        </div>
                        <div className='pt-2 pl-2'>
                        <button type="button" className="  hover:opacity-80 font-medium rounded-lg bg-red-400 text-white text-sm px-5 py-2.5 me-2 mb-2">Report</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Reviews;
