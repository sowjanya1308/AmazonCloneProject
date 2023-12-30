import React from 'react';
import watch from "../../images/watch.png";
import watch1 from "../../images/watch1.png";
import watch2 from "../../images/watch2.png";
import watch3 from "../../images/watch3.png";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { IoLocationOutline} from "react-icons/io5";
import Header from "../components/header";
import Reviews from './reviews';
import HorizontalScrollCards from './horizontalScrollCards';
import {useParams} from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import { getProducts } from '../../redux/productRelated/productHandle';

const Product = () => {

    const params = useParams();

    const {data,isLoading} = useQuery({
        queryKey:['product',params.id],
        queryFn:()=>getProducts({"id":params.id})
    })

    console.log(data);

  return (
    <>
      <Header/>
      {
        (!isLoading)&&
        <>
            <div>
                <div className='flex justify-around'>
                    <div className='pl-20 pt-10 img-stick h-fit'>
                        <img src={data.data.data[0].image[0]} alt ="img" className='mx-auto'/>
                        <div class="grid grid-cols-4 gap-2">
                            {
                                data.data.data[0].image.map((e,index)=>{
                                    return <div key={index} className='pt-4'>
                                        <img src={e} alt ="img" className='h-[110px] w-[150px]'/>
                                    </div>
                                })
                            }
                            
                            
                            {/* <div className='pt-4'>
                            <img src={watch1} alt ="img" className='h-[110px] w-[150px]'/>
                            </div>
                            
                            <div className='pt-4'>
                            <img src={watch2} alt ="img" className='h-[110px] w-[150px]'/>
                            </div>
                            
                            <div className='pt-4'>
                            <img src={watch3} alt ="img" className='h-[110px] w-[150px]'/>
                            </div> */}
                        </div>
                    </div>
                    <div className='m-10'>
                        <h1 className='text-3xl font-semibold max-w-[30vw]'>{data.data.data[0].title}</h1>
                        <div className='mt-1'>
                            <div className='flex items-center'>
                                <h1 className="text-xs font-normal">⭐⭐⭐⭐⭐</h1>
                                <p className='ml-2 text-blue-500 hover:underline cursor-pointer'>97,365 rattings</p>
                            </div>
                        </div>
                        <div className=' flex pt-4'>
                            <div>
                                <h1 className="text-3xl font-Medium">₹{(data.data.data[0].price)-Math.round(((data.data.data[0].discount)/100)*(data.data.data[0].price))} <span></span></h1>
                                <h1 className="text-s line-through font-normal text-rose-600">MRP:₹{data.data.data[0].price}</h1>
                            </div>
                            <div className='ml-10'>
                                <h1 className="text-xl text-center font-normal deal h-[30px] w-[60px] text-white animate-bounce">Deal</h1>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div>
                                <div className='lg:pt-9 md:pt-4 flex md:flex-col lg:flex-row lg:items-center'>
                                    <div className='md:order-2 lg:order-1 md:mt-5 lg:mt-0'> 
                                        <h1 className=' text-2xl font-medium'>Product Details</h1>
                                        <table className='mt-3'>
                                            <thead>
                                                <tr>
                                                    <th>Type</th>
                                                    <th>Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Color</td>
                                                    <td>{data.data.data[0].color}</td>
                                                </tr>
                                                <tr>
                                                    <td>Material Type</td>
                                                    <td>{data.data.data[0].type}</td>
                                                </tr>
                                                <tr>
                                                    <td>Watch Moment Type</td>
                                                    <td>Quartz</td>
                                                </tr>
                                                <tr>
                                                    <td>Item Weight</td>
                                                    <td>{data.data.data[0].weight}</td>
                                                </tr>
                                                <tr>
                                                    <td>Country of origin</td>
                                                    <td>{data.data.data[0].origin}</td>
                                                </tr>
                                                {/* {
                                                    data.data.data[0].additionaldetails
                                                } */}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='flex flex-col md:order-1 lg:order-2 lg:ml-10'>
                                        <div className='flex-col'>
                                            <div className=''>
                                                <label for='quantity' className='font-medium '>Quantity: </label>
                                                <select id='quantity' className='ml-2 px-4 py-1 rounded'>
                                                <option value={1} selected>1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                </select>
                                            </div>
                                            <div className='flex my-3'>
                                                <div className=''>
                                                <button type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add To Cart</button>
                                                </div>
                                                <div className=''>
                                                <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Check Out</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <h1 className=' text-2xl font-medium text-green-700'>In Stock</h1>
                                            <div className="flex items-center mt-1">
                                                <input id="default-radio-1" type="radio" value="Free Delivery by 10/12/2023, order within 2hr 35min" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "/>
                                                <label for="default-radio-1" className="ms-2 text-sm font-normal text-gray-900"> Free Delivery by 10/12/2023, order within 2hr 35min</label>
                                            </div>
                                            <div className="flex items-center mt-1">
                                                <input id="default-radio-2" type="radio" value="Fast Delivery by 6/12/2023" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "/>
                                                <label for="default-radio-2" className="ms-2 text-sm font-normal text-gray-900">Fast Delivery by 6/12/2023</label>
                                            </div>
                                            <div className="flex items-center mt-1 text-blue-500 hover:underline">
                                                <IoLocationOutline/>
                                                <a href="#" className='font-medium '>Deliver to Sowjanya, 520015</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-9 flex flex-col'>
                                    {/* <div>
                                    <h1 className='pt-2 text-2xl font-medium'>About this item</h1>
                                    <ul className='pt-3 list-decimal'>
                                        <li>Dial Color: White, Case Shape: Round, Dial Glass Material: Mineral</li>
                                        <li>Band Color: Green, Band Material: Leather</li>
                                        <li>Watch Movement Type: Quartz, Watch Display Type: Analog</li>
                                        <li>Case Material: Stainless Steel, Case Diameter: 50 millimeters</li>
                                        <li>Water Resistance Depth: 50 meters, Lock Mechanism: Buckle</li>
                                        <li>24 Months manufacturer warranty on manufacturing defects</li>
                                    </ul>
                                    </div> */}
                                    <div dangerouslySetInnerHTML={{__html:data.data.data[0].description}}></div>
                                    <div>
                                        <div className='flex mt-5'>
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

                {/* reviews */}
                <div>
                    <h1 className='font-bold text-3xl pl-20 pt-10'>Reviews</h1>
                    <div className='mx-14'>
                        <div className='grid auto-col-grid gap-5 mt-5'>
                            <div>
                                <Reviews/>
                            </div>
                            <div>
                                <Reviews/>
                            </div>
                            <div>
                                <Reviews/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* recommended  */}

                <div>
                    <h1 className='font-bold text-3xl pl-20 pt-10'>You may also like...</h1>
                    <div className='pt-3'>
                        <HorizontalScrollCards/>
                    </div>
                </div>
            </div>
        </>
      }
      
    </>
  )
}

export default Product;
