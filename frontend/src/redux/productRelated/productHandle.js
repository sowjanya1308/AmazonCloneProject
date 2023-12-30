import axios from "../service/instance"

export const addNewProduct=(fields)=>{
    return axios.post("/addProduct", fields,{
        headers:{
            "Content-Type":"multipart/form-data",
        }
    });
};

export const getProducts = (fields)=>{
    return axios.get("/getproducts",{
        params:fields
    });
}