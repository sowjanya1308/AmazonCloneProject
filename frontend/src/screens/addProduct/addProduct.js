import React, { useState } from 'react'
import { IoAddSharp } from "react-icons/io5";
import {useMutation} from "@tanstack/react-query"
import {addNewProduct,} from "../../redux/productRelated/productHandle"

const initialstate = {
    image: [],
    title:"",
    price:"",
    discount:"",
    description:"",
    color:"",
    type:"",
    weight:"",
    origin:"",
    productDesc:{}
}

const productDetails = {
    field1_input:"",
    field2_input:"",
    field3_input:"",
}

const AddProduct = () => {
    const [field,setField] = useState(0);
    const [product, setProduct] = useState(initialstate)
    const [details,setDetails] = useState(productDetails)

    const handleFields=(e)=>{
        const field = e.target.id;
        setProduct({...product, [field]:e.target.value})
    }

    const handleDetails=(e)=>{
        const field = e.target.id;
        setDetails({...details, [field]:e.target.value})
    }

    const {status,response,error,mutate:item} = useMutation({
        mutationFn:addNewProduct,
    })

    const evt=(e)=>{
        const preview = document.querySelector(".load-images");
        const file = e.target.files
        console.log(e);
        setProduct({...product,image:Object.values(file)})
        while(preview.firstChild){
            preview.removeChild(preview.firstChild)
        }
        Object.values(file).map((e)=>{
            const node = document.createElement("img")
            node.src = URL.createObjectURL(e)
            node.width = 120
            node.height = 120
            return preview.append(node)
        })
    }

    const addRow=()=>{
        const addRow = document.getElementById("addRow");
        (field === 2) ? addRow.setAttribute("hidden",true):<></>
        setField(field+1);
        const row = document.getElementsByClassName("rowadd").item(field);
        (row.style.display === "none")?row.style.display="table-row":row.style.display="none"
    }

    const addProduct=(e)=>{
        e.preventDefault()
        // setProduct({...product, productDesc:{
        //     color:details.color,
        //     type:details.type,
        //     weight:details.weight,
        //     origin:details.origin,
        //     [details.field1_input]:details.field1_value,
        //     [details.field2_input]:details.field2_value,
        //     [details.field3_input]:details.field3_value
        // }})
        item(product)
    }

  return (
    <>
    <div>
        <div className='flex flex-col items-center justify-center '>
            <form className='m-14' onSubmit={addProduct}>
                <div className='flex items-center'>
                    <label htmlFor='image' className='mr-3 text-xl'>Add Image</label>
                    <input id='image' accept='image/*' type='file' onChange={evt} size={'1MB'} multiple/>
                    <div className='load-images grid grid-cols-3 gap-3'>
                    </div>
                </div>
                <label htmlFor='title' className='text-xl'>Title</label>
                <input id='title' type='text' placeholder='product title' onChange={handleFields} value={product.title} className='w-full p-3 rounded mb-2'/>
                <label htmlFor='price' className='text-xl'>MRP Price</label>
                <input id='price' type='number' placeholder='price' onChange={handleFields} value={product.price} className='w-full p-3 rounded mb-2'/>
                <label htmlFor='discount' className='text-xl'>Discount</label>
                <input id='discount' type='number' placeholder='discount' onChange={handleFields} value={product.discount} className='w-full p-3 rounded mb-2'/>
                <label htmlFor='desc' className='text-xl'>Item Description</label>
                <textarea className='w-full p-3 mb-2 rounded' rows={10} placeholder='description' onChange={handleFields} value={product.description} id='description'/>
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
                            <td className='p-5'><input id='color' type='text' placeholder='color' className='w-full p-3 rounded ' onChange={handleFields} value={product.color} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor='material'>Material Type</label></td>
                            <td className='p-5'><input id='type' type='text' placeholder='leather ...' className='w-full p-3 rounded ' onChange={handleFields} value={product.type}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor='Weight'>Weight</label></td>
                            <td className='p-5'><input id='weight' type='text' placeholder='weight' className='w-full p-3 rounded ' onChange={handleFields} value={product.weight}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor='Origin'>Origin</label></td>
                            <td className='p-5'><input id='origin' type='text' placeholder='Origin' className='w-full p-3 rounded ' onChange={handleFields} value={product.origin}/></td>
                        </tr>
                        <tr className='rowadd' style={{"display":"none"}}>
                            <td className='p-5'><input id='field1_input' type='text' placeholder='type' className='w-full p-3 rounded ' onChange={handleDetails} value={details.field1_input}/></td>
                            <td className='p-5'><input id='field1_value' type='text' placeholder='value' className='w-full p-3 rounded ' onChange={(e)=>[setProduct({...product, productDesc:{[details.field1_input]:e.target.value}})]} value={product[details.field1_input]} /></td>
                        </tr>
                        <tr className='rowadd' style={{"display":"none"}}>
                            <td className='p-5'><input id='field2_input' type='text' placeholder='type' className='w-full p-3 rounded ' onChange={handleDetails} value={details.field2_input}/></td>
                            <td className='p-5'><input id='field2_value' type='text' placeholder='value' className='w-full p-3 rounded ' onChange={(e)=>[setProduct({...product, productDesc:{[details.field2_input]:e.target.value}})]} value={product[details.field2_input]}/></td>
                        </tr>
                        <tr className='rowadd' style={{"display":"none"}}>
                            <td className='p-5'><input id='field3_input' type='text' placeholder='type' className='w-full p-3 rounded ' onChange={handleDetails} value={product.field3_input}/></td>
                            <td className='p-5'><input id='field3_value' type='text' placeholder='value' className='w-full p-3 rounded ' onChange={(e)=>[setProduct({...product, productDesc:{[details.field3_input]:e.target.value}})]} value={product[details.field3_input]}/></td>
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