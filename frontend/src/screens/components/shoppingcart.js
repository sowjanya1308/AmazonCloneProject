import React from 'react';
import watch from "../../images/watch.png"
import Header from './header';


const ShoppingCart = () => {
 return (
    <>
    <Header/>
    <div className="container mx-auto">
        <div className="flex flex-col md:flex-row ml-5 m-5">
            <div className="md:w-1/2 md:pr-8">
            <div>
                <h1 className="text-2xl font-bold mb-4">Contact</h1>
                <div className="mb-4">
                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900"></label>
                <select id="countries" class="bg-gray-50 rounded px-2 py-1 ">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
                </div>

                <div className="mb-4">
                <div className="flex">
                    <div className="flex-grow pr-2">
                    <input type="text" id="first_name" className="input-field border-neutral-50" placeholder="Enter Your First Name" required />
                    </div>
                    <div className="flex-grow pl-2">
                    <input type="text" id="last_name" className="input-field" placeholder="Enter Your Last Name" required />
                    </div>
                </div>
                </div>

                <div className='mb-4'>
                        <input type="text" id="first_name" className="input-field" placeholder="Flat, D.No, Building.." required/>
                    </div>
                    <div className='mb-4'>
                        <input type="text" id="first_name" className="input-field" placeholder="Area, Street.." required/>
                    </div>
                    <div className='flex mb-4'>
                        <div className="flex-grow pr-2">
                            <input type="text" id="first_name" className="input-field" placeholder="City" required/>
                        </div>
                        <div className="flex-grow pl-2">
                            <input type="text" id="last_name" class="input-field" placeholder="State" required/>
                        </div>
                        <div className="flex-grow pl-2">
                            <input type="text" id="last_name" class="input-field" placeholder="Pincode" required/>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <input type="text" id="first_name" className="input-field" placeholder="Phone Number" required/>
                    </div>
                    <div class="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 ">Make This My Permanent Address</label>
                    </div>
                    <div>
                        <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Save</button>
                    </div>
                </div>
            </div>

            <div className="md:w-1/2 md:pl-8 mt-5">
            <div className="img flex h-auto w-auto shadow-2xl">
                <div className="flex-shrink-0">
                <img src={watch} alt="watch" className="w-32 h-32 ml-6 mt-4 object-cover rounded-xl" />
                </div>

                <div className="flex flex-col flex-grow p-4">
                <div>
                    <h2 className="font-bold text-lg mb-2">Titan Quartz Multifunction White Dial Leather Strap Watch for Men</h2>
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
                </div>
            </div>
            </div>
            
        </div>
    </div>

    </>
    );
};

export default ShoppingCart;