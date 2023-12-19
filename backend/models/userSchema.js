const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    token:{
        type:String,
    },
    otp:{
        type:String,
    }
});

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
    }
    next();
});

userSchema.methods.generateAuthToken = async function (){
    try{
        let tokenUser = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.token = tokenUser;
        await this.save();
        return tokenUser;
    }catch(err){
        console.log(err);
    }
}

userSchema.methods.generateOTP = async function(){
    try{
        let otp = Math.floor(Math.random() * 9000 + 1000);
        this.otp = otp;
        await this.save();
        return otp;
    }catch(error){
        console.log(error);
    }
}

module.exports = mongoose.model("user",userSchema);