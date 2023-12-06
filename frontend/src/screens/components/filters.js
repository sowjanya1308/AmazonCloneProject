import React from 'react'

const Filters = () => {
  return (
    <>
      <div className='container flex flex-col filters pt-10 pl-3'>
        <div className='flex items-center justify-between'>
            <div><h1 className="font-semibold text-2xl">Filters</h1></div>
            <div><h1 className="text-lg font-normal text-blue-600">Clear all</h1></div>
        </div>
        <hr class="h-px mt-5 bg-black border-0 dark:bg-gray-700"/>
        <div>
        {/* brands */}
        <div className='pt-5 flex flex-col'>
                <div>
                <h1 className='font-semibold text-lg'>Brands</h1>
                </div>
                <div className='mt-2'>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">Titan</label>
                    </div>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">Joker and Witch</label>
                    </div>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">Sonata</label>
                    </div>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">Fossil</label>
                    </div>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">FastTrack</label>
                    </div>
                </div>
            </div>
        </div>
        {/* stock */}
            <div className='mt-2 flex flex-col'>
                <div>
                    <h1 className='font-semibold text-lg'>Gender</h1>
                </div>
                <div className='mt-2'>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">Male</label>
                    </div>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">Female</label>
                    </div>
                </div>
            </div>
         {/* price */}
         <div>
            <div className='flex flex-col'>
            <div>
                <h1 className='mt-3 font-semibold text-lg'>Price</h1>
            </div>
            <div class="relative mb-6">
                <label for="labels-range-input" class="sr-only"></label>
                <input id="labels-range-input" name="priceRange" type="range" min="1000" max="30000" class="w-full h-2 rounded-lg appearance-none cursor-pointer"/>
                <span class="text-sm absolute start-0 -bottom-6">1000</span>
                <span class="text-sm absolute end-0 -bottom-6">30,000</span>
            </div>
            </div>
         </div>
         {/* discount */}
         <div className='mt-2 flex flex-col'>
                <div>
                <h1 className='font-semibold text-lg'>Discount</h1>
                </div>
                <div className='mt-2'>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">50% Off</label>
                    </div>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">60% Off</label>
                    </div>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">70% Off</label>
                    </div>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">80% Off</label>
                    </div>
                </div>
            </div>
            {/* stock */}
            <div className='mt-2 flex flex-col'>
                <div>
                    <h1 className='font-semibold text-lg'>Stock</h1>
                </div>
                <div className='mt-2'>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">Include Out of Stock</label>
                    </div>
                </div>
            </div>
            {/* color */}
            <div className='mt-2 flex flex-col'>
                <div>
                    <h1 className='font-semibold text-lg'>Color</h1>
                </div>
                <div className='mt-2'>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">Black</label>
                    </div>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        <label for="default-checkbox" className="ms-2 text-sm font-medium text-red-500 ">Red</label>
                    </div>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        <label for="default-checkbox" className="ms-2 text-sm font-medium text-pink-400 ">Pink</label>
                    </div>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        <label for="default-checkbox" className="ms-2 text-sm font-medium text-blue-600 ">Blue</label>
                    </div>
                    <div className="flex items-center">
                        <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"/>
                        <label for="default-checkbox" className="ms-2 text-sm font-medium text-purple-600 ">Purple</label>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Filters;
