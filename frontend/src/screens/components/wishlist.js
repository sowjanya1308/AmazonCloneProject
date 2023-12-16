import React from 'react';
import watch from "../../images/watch.png";
import { AiOutlineDelete } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Header from './header';

const Wishlist = (props) => {

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
    <Header/>
      <div className="container mx-auto p-8 mt-5">
        <h1 className="text-3xl font-semibold mb-8">Your Wishlist</h1>

        <div className="img flex h-auto max-w-xl shadow-2xl relative">
            
            <div className="flex-shrink-0">
            <img src={watch} alt="watch" className="w-32 h-32 ml-6 mt-4 object-cover rounded-xl" />
            </div>

            <div className="flex flex-col flex-grow p-4">
            <div>
                <div className='flex '>
                    <div>
                    <h2 className="font-bold text-lg mb-2">Titan Quartz Multifunction White Dial Leather Strap Watch for Men</h2>
                    </div>
                    <div className="ml-auto">
                    <div onClick={()=>fav(props.id)} className='absolute top-[7%] hover:shadow-lg hover:rounded-full p-2 left-[20%] z-10'>
                        <IoHeartOutline className='outline-heart' size={25} color='red' fill='#000' style={{"display":"block"}}/>
                        <FaHeart className='filled-heart' size={24} color='red' style={{"display":"none"}}/>
                    </div>
                    </div>
                </div>
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

            <div className='flex'>
                <div className="text-red-600">
                    <button type="button" className="flex items-center text-sm focus:outline-none">
                    <AiOutlineDelete className="text-2xl" />
                    <span className="ml-1">Remove</span>
                    </button>
                </div>
                <div className='ml-10 text-blue-600'>
                    <button type="button" className="flex items-center text-sm focus:outline-none">
                    <IoCartOutline className="text-2xl" />
                    <span className="ml-1">Add to Cart</span>
                    </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Wishlist;
