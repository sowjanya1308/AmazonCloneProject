const {PrismaClient} = require("@prisma/client")
const {getApp,initializeApp} = require("firebase/app")
const {getStorage, ref, uploadBytes} = require("firebase/storage")

const prisma = new PrismaClient()

const firebaseConfig = {
    apiKey: "AIzaSyANcD1jnEorCNPMckuwtZeNJXZDUta0B-A",
    authDomain: "ecommerce-5e03f.firebaseapp.com",
    projectId: "ecommerce-5e03f",
    storageBucket: "ecommerce-5e03f.appspot.com",
    messagingSenderId: "840067888883",
    appId: "1:840067888883:web:f5ee1989174807ee692986",
    measurementId: "G-GRLRRSEYLE"
};

initializeApp(firebaseConfig);
const storage = getStorage(getApp(), "gs://ecommerce-5e03f.appspot.com")


const addProduct = async(req,res)=>{
    console.log(req.body);
}

module.exports = {addProduct}