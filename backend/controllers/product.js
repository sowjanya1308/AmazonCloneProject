const {PrismaClient} = require("@prisma/client");
const { json } = require("express");
const {getApp,initializeApp} = require("firebase/app")
const {getStorage, ref, uploadBytes, uploadBytesResumable} = require("firebase/storage")

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
    const {title,price,discount,description,color,weight,type,origin,company,category,additionaldetails} = req.body;
    const images = []
    req.files.map((e)=>{
        const storageref = ref(storage,e.originalname)
        const metadata = {
            contentType:e.mimetype
        }
        uploadBytes(storageref,e.buffer,metadata)
        images.push(`https://firebasestorage.googleapis.com/v0/b/ecommerce-5e03f.appspot.com/o/${e.originalname}?alt=media`);
    })

    console.log(additionaldetails);
    console.log(JSON.parse(additionaldetails));
    
    try{
        await prisma.product.create({
            data:{
                image:images,
                title:title,
                price:price,
                discount:discount,
                description:description,
                color:color,
                weight:weight,
                type:type,
                origin:origin,
                company:company,
                category:category,
                additionaldetails:JSON.parse(additionaldetails)
            }
        })
        res.status(201).json({message:"product added successfully"});
    }catch(err){
        console.log(err);
    }
}

module.exports = {addProduct}