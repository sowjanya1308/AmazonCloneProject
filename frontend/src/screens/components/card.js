import React from 'react';
import watch from "../../images/watch.png";
import { IoHeartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";

const Card = (props) => {

  function fav(id){
    const outline = document.getElementsByClassName("outline-heart").item(id);
    const filled = document.getElementsByClassName("filled-heart").item(id);
    if(outline.style.display === "none"){
      outline.style.display = "block"
      filled.style.display = "none"
    }else{
      outline.style.display = "none"
      filled.style.display = "block"
    }
  }

  return (
    <>
      <div className='card shadow-lg rounded-[8px] border flex flex-col h-auto relative'>
        <div onClick={()=>fav(props.id)} className='absolute top-[5%] hover:shadow-lg hover:rounded-full p-2 right-[7%] z-10'>
          <IoHeartOutline className='outline-heart' size={25} color='red' fill='#000' style={{"display":"block"}}/>
          <FaHeart className='filled-heart' size={24} color='red' style={{"display":"none"}}/>
        </div>
        <div className='flex h-[345px] justify-center w-auto relative'>
            <img src={watch} alt='watch' className='object-cover'/>
            <div className='absolute bottom-[5%] right-[7%]'>
              <span className='px-3 rounded shadow-lg flex items-center'>5
                <TiStarFullOutline />
              </span>
            </div>
        </div>
        <div className='p-2 flex flex-col justify-evenly'>
            <h2 className='text-center font-semibold text-2xl'>Titan</h2>
            <p className='font-light'>Men's analogue watch</p>
            <div className='flex mt-2'>
              <div className='bg-red-700 rounded px-3 ' >
                <span className='font-medium text-white'>25%</span>
              </div>
              <span className='font-medium text-red-700 ml-2'>Deal of the day</span>
            </div>
            <div className='flex items-center mt-2'>
                <p className="font-semibold text-xl text-blue-900">₹7499</p>
                <p className='line-through ml-3 text-gray-500'>₹9999</p>
            </div>
            <p className='text-[13px] mt-2'>Get It by <strong>2nd December</strong></p>
        </div>
      </div>
    </>
  )
}

export default Card;
