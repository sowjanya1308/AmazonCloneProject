const express = require("express")
const cors = require('cors')
const dotenv = require("dotenv")

const app = express();

// app
app.use(cors())


// env config
dotenv.config({path: ".env"})

// database
const connectDB = require("./db/connection");
const { sendEmail } = require("./controllers/mail");



// start
const port = process.env.PORT;
const start = async()=>{
    try{
        // await connectDB(process.env.MONGO_URI);
        // sendEmail("sowjanyasankara@gmail.com","test mail","sent email successfully")
        app.listen(port,()=>{
            console.log(`successfully running on ${port}`);
        })
    }catch(err){
        console.log(err);
    }
}

start()