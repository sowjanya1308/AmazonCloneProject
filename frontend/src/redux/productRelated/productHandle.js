import axios from "../service/instance"

const headers = {
    "content-type":"form-data"
}
export const addNewProduct=(fields)=>{
    return axios.post("/addProduct", fields,headers);
};