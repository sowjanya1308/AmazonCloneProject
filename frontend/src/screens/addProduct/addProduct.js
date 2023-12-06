import React, { useState } from 'react'
import { IoAddSharp } from "react-icons/io5";

const AddProduct = () => {
    const [field,setField] = useState(0);

    const evt=(e)=>{
        console.log(e);
        const preview = document.getElementById("preview");
        const file = e.target.files[0]
        if (file) {
            preview.src = URL.createObjectURL(file)
        }
    }

    const addRow=()=>{
        const addRow = document.getElementById("addRow");
        (field === 2) ? addRow.setAttribute("hidden",true):<></>
        setField(field+1);
        const row = document.getElementsByClassName("rowadd").item(field);
        (row.style.display === "none")?row.style.display="table-row":row.style.display="none"
    }
  return (
    <>
    <div>
        <div className='flex flex-col items-center justify-center '>
            <form className='m-14'>
                <div className='flex items-center'>
                    <label htmlFor='image' className='mr-3 text-xl'>Add Image</label>
                    <input id='image' accept='image/*' type='file' onChange={evt} size={'1MB'}/>
                    <img className=' object-fill' src="#" id='preview' alt="img" height={120} width={120}/>
                </div>
                <label htmlFor='title' className='text-xl'>Title</label>
                <input id='title' type='text' placeholder='product title' className='w-full p-3 rounded mb-2'/>
                <label htmlFor='price' className='text-xl'>MRP Price</label>
                <input id='price' type='number' placeholder='price' className='w-full p-3 rounded mb-2'/>
                <label htmlFor='discount' className='text-xl'>Discount</label>
                <input id='discount' type='number' placeholder='discount' className='w-full p-3 rounded mb-2'/>
                <label htmlFor='desc' className='text-xl'>Item Description</label>
                <textarea className='w-full p-3 mb-2 rounded' rows={10} placeholder='description'/>
                <label className='text-xl font-bold'>Product Details</label>
                <table className='w-full table table-fixed text-center mb-5'>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody className='relative'>
                        <tr >
                            <td><label htmlFor='color'>Color</label></td>
                            <td className='p-5'><input id='color' type='text' placeholder='color' className='w-full p-3 rounded ' /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor='material'>Material Type</label></td>
                            <td className='p-5'><input id='material' type='text' placeholder='leather ...' className='w-full p-3 rounded ' /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor='Weight'>Weight</label></td>
                            <td className='p-5'><input id='Weight' type='text' placeholder='weight' className='w-full p-3 rounded ' /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor='Origin'>Origin</label></td>
                            <td className='p-5'><input id='Origin' type='text' placeholder='Origin' className='w-full p-3 rounded ' /></td>
                        </tr>
                        <tr className='rowadd' style={{"display":"none"}}>
                            <td className='p-5'><input id='add-label-1' type='text' placeholder='type' className='w-full p-3 rounded ' /></td>
                            <td className='p-5'><input id='add-input-1' type='text' placeholder='value' className='w-full p-3 rounded ' /></td>
                        </tr>
                        <tr className='rowadd' style={{"display":"none"}}>
                            <td className='p-5'><input id='add-label-2' type='text' placeholder='type' className='w-full p-3 rounded ' /></td>
                            <td className='p-5'><input id='add-input-2' type='text' placeholder='value' className='w-full p-3 rounded ' /></td>
                        </tr>
                        <tr className='rowadd' style={{"display":"none"}}>
                            <td className='p-5'><input id='add-label-3' type='text' placeholder='type' className='w-full p-3 rounded ' /></td>
                            <td className='p-5'><input id='add-input-3' type='text' placeholder='value' className='w-full p-3 rounded ' /></td>
                        </tr>
                        <p id='addRow' onClick={addRow} className='absolute bottom-[-6%] shadow-lg left-[48.5%] bg-white w-fit p-3 rounded-full cursor-pointer'><IoAddSharp/></p>
                        <p className='absolute right-0 left-0 mt-7 text-center'> {field===3 ? "Refresh to reset":`${3-field} more fields you can add`}</p>
                    </tbody>
                </table>
                <div className='w-full relative flex justify-end mt-10'>
                    <input type='submit' value={"Submit"} className='bg-white px-3 py-1 shadow-lg cursor-pointer '/>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default AddProduct