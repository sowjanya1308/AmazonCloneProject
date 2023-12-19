require("dotenv").config({ path: '../.env' });
const nodemailer = require("nodemailer");

const verify = ()=>{
    let transponder = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASS,
        }
    });

    return transponder;
}

const sendEmail = (sendto,subject,msg)=>{
    verify().sendMail({
        from:process.env.AUTH_MAIL,
        to:sendto,
        subject:subject,
        html:msg
    });
}

module.exports = {verify,sendEmail}