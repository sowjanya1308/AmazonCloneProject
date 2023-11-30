import React from 'react';
import watch from "../../images/watch.png";
import { NavLink } from 'react-router-dom';

const Card = () => {
  return (
    <>
      <div className='shadow-lg rounded-[8px] border flex flex-col w-fit'>
        <div className='flex h-[345px] w-[258px]'>
            <img src={watch} alt='watch' className='object-cover'/>
        </div>
        <div className='pt-2'>
            <h2 className='text-center font-semibold text-2xl'>Titan Raga</h2>
            <div className='flex items-center'>
                <p className="font-semibold text-xl text-red-600">₹ 5500</p>
                <p className='line-through ml-3'>₹ 6000</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card;
