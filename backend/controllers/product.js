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


module.exports.addProduct = async(req,res)=>{
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

module.exports.getProducts = async(req,res)=>{
    const {page,newrelease,price,discount,color,category,type,company,id} = req.query;
    const querylist = {}
    if(id){
        querylist.id = id;
    }
    if(newrelease){
        querylist.newrelease = Boolean(newrelease);
    }
    if(price){
        querylist.price = price;
    }
    if(discount){
        querylist.discount = discount;
    }
    if(color){
        querylist.color = color;
    }
    if(category){
        querylist.category = category;
    }
    if(type){
        querylist.type = type;
    }
    if(company){
        querylist.company = company;
    }
    try{
        const data = await prisma.product.findMany({
            take:(page)?10:undefined,
            skip: (page)?(page-1)*10:undefined,
            where:querylist,            
        })
        res.status(200).json({data,length:data.length})
    }catch(err){
        console.log(err);
    }
}
