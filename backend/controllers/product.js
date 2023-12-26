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
    const {image,title,price,discount,description,color,weight,type,origin, company} = req.body;
    if(!image||!title || !price || !discount || !description || !color || !weight || !type || !origin || !company){
        return res.status(422).json({message:"Plz fill the fields properly"});
    }
    try{
            await prisma.product.create({
                data:{
                    image:image,
                    title:title,
                    price:price,
                    discount:discount,
                    description:description,
                    color:color,
                    weight:weight,
                    type:type,
                    origin:origin,
                    company:company,
                }
            })
            // sendEmail(email,"Registration Successfull",
            //     `<center>
            //     <h1>Welcome ${name}</h1>
            //     <h3>Thank you for choosing E-commerce platform</h3>
            //     <p>Have a worderfull shopping</p>
            //     </center>
            //     `
            // )
            res.status(201).json({message:"product added successfully"});
    }catch(err){
        console.log(err);
    }
}

module.exports = {addProduct}