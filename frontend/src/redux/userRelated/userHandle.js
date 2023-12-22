import axios from "../service/instance";

export const userLogin=(fields)=>{
    return axios.post("/login", fields);
};

export const userRegister=(fields)=>{
    return axios.post("/register", fields);
};
