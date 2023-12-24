import axios from "../service/instance"

export const addNewProduct=(fields)=>{
    return axios.post("/addProduct", fields);
};