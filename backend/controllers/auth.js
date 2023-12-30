const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {PrismaClient} = require("@prisma/client")
const { sendEmail } = require("./mail");
const os = require('os')

const prisma = new PrismaClient()

const createUser = async(req,res)=>{
    const {name,email,phone,password,cpassword} = req.body;
    if(!name || !email || !phone || !password || !cpassword){
        return res.status(422).json({message:"Plz fill the fields properly"});
    }
    try{
        const userExist = await prisma.users.findUnique({
            where:{
                email:email
            },
        })
        if(userExist){
            return res.status(422).json({message:"Email aldready exists"});
        }else if(password != cpassword){
            return res.status(422).json({message:"password are not matching"});
        }else{
            await prisma.users.create({
                data:{
                    name:name,
                    email:email,
                    phone:phone,
                    password: await bcrypt.hash(password,12)
                }
            })
            sendEmail(email,"Registration Successfull",
                `<center>
                <h1>Welcome ${name}</h1>
                <h3>Thank you for choosing E-commerce platform</h3>
                <p>Have a worderfull shopping</p>
                </center>
                `
            )
            res.status(201).json({message:"user registered successfully"});
        }
    }catch(err){
        console.log(err);
    }
}

const loginUser = async(req,res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(422).json({message:"Plz fill the fields properly"});
    }
    try{
        const userExist = await prisma.users.findUnique({
            where:{
                email:email
            },
        })
        if(!userExist){
            return res.status(422).json({message:"Email not found"})
        }else{
            const isMatch = bcrypt.compare(password, userExist.password)
            if(isMatch){
                var deviceFound = false;
                userExist.devices.map((i)=>{
                    if(i===os.hostname()){
                        deviceFound = true;
                    }
                })
                const tokenUser = jwt.sign({_id:userExist.id}, process.env.SECRET_KEY);
                if(!deviceFound){
                    await prisma.users.update({
                        where:{
                            email:email
                        },
                        data:{
                            devices:{
                                push:os.hostname()
                            }
                        }
                    })
                    sendEmail(email,"New Device Login",
                    `
                    <center>
                    <h3>We've noticed a new login, ${userExist.name}</h3>
                    <h2>Your new device name is ${os.hostname()}</h2>
                    <h4>IP Address: ${os.networkInterfaces()['Wi-Fi'][1]['address']}</h4>
                    <p>${Date().substring(4,15)} at ${Date().substring(16,21)}</p>
                    </center>
                    `
                    )
                }
                await prisma.users.update({
                    where:{
                        email:email
                    },
                    data:{
                        token:tokenUser
                    }
                })
                res.cookie("jwt",tokenUser,{
                    expires:new Date(Date.now() + 25600000),
                    sameSite:"None",
                    httpOnly : true,
                })
                return res.status(200).json({message:"Login Successfull",token:tokenUser,user:{
                    "id":userExist.id,
                    "name":userExist.name,
                    "phone":userExist.phone,
                    "email":userExist.email,
                }})
            }else{
                return res.status(400).json({message:"Password Incorrect"})
            }
        }
    }catch(err){
        console.log(err);
    }
}


module.exports = {createUser, loginUser}