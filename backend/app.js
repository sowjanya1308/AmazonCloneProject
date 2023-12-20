const express = require("express")
const cors = require('cors')
const dotenv = require("dotenv")
const { sendEmail } = require("./controllers/mail");
const routes = require("./router/routes")

const app = express();

// app
app.use(cors())
app.use(express.json());

// env config
dotenv.config({path: ".env"})


// connect routes
app.use("/api/v1",routes);

app.get("/",async(req,res)=>{
    req.cookies
})

// start
const port = process.env.PORT;
const start = async()=>{
    try{
        app.listen(port,()=>{
            console.log(`successfully running on ${port}`);
        })
    }catch(err){
        console.log(err);
    }
}

start()