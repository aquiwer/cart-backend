import * as uuid from 'uuid';
import * as path from 'path';
import nodemailer from "nodemailer";

class MailService {
    async sendUniqCode (email, secretKey) {
        console.log(secretKey, 'email')
        try{
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: "nodemailerdimatest@gmail.com", // generated ethereal user
                    pass: "DimaKing228", // generated ethereal password
                }
            })
            await transporter.sendMail({
                from: `"Key checker bot" nodemailerdimatest@gmail.com`, // sender address
                to: `${email}`, // list of receivers
                subject: "Uniq Code", // Subject line
                text: `${secretKey}`, // plain text body
                html: `<b>Please, copy this code ${secretKey} and paste in the Dail-Shop Registration Window</b>`, // html body
            }, (error, info) => {
                if(error){
                    console.log(error)
                }else{
                    console.log(`Email sent ${info.response}`)
                    return res.status(400).json("Something went wrong")
                }
            });
            return secretKey;
        }catch (e) {
            return res.status(500).json("Something went wrong")
        }
    }
}

export default new MailService()