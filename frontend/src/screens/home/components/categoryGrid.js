import React from 'react'
import pic from "../../../images/watch.png"

const CategoryGrid = () => {
  return (
    <>
        <div className='p-3 shadow-lg w-auto h-auto m-3 bg-white mx-auto'>
            <div>
                <h1 className='ml-3 font-semibold text-xl mb-3'>Category-1</h1>
            </div>
            <div className='grid gap-y-4 gap-x-1 category justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <a href='/' className=' hover:underline hover:text-red-500'><img src={pic} alt='pic'/>
                    <p className='text-[12px] ml-2 mt-2'>Item 1</p>
                    </a>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <a href='/' className=' hover:underline hover:text-red-500'><img src={pic} alt='pic'/>
                    <p className='text-[12px] ml-2 mt-2'>Item 2</p>
                    </a>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <a href='/' className=' hover:underline hover:text-red-500'><img src={pic} alt='pic'/>
                    <p className='text-[12px] ml-2 mt-2'>Item 3</p>
                    </a>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <a href='/' className=' hover:underline hover:text-red-500'><img src={pic} alt='pic'/>
                    <p className='text-[12px] ml-2 mt-2'>Item 4</p>
                    </a>
                </div>
            </div>
            <div className='mt-3'>
                <a href='/' className='text-[13px] text-blue-700 hover:underline'>see more</a>
            </div>
        </div>
    </>
  )
}

export default CategoryGrid