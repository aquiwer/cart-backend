import nodemailer from "nodemailer";

class MailService {
    async sendUniqCode (email, secretKey) {
        console.log(secretKey, 'email')
        try{
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: "nodemailerdimatest@gmail.com",
                    pass: "disneyvvnik",
                }
            })
            await transporter.sendMail({
                from: `"Dial code bot" nodemailerdimatest@gmail.com`,
                to: `${email}`,
                subject: "Uniq Code",
                text: `${secretKey}`,
                html: `<b>Please, copy this code ${secretKey} and paste in the Dial-Shop Registration Window</b>`,
            }, (error, info) => {
                if(error){
                    console.log(error)
                }else{
                    console.log(`Email sent ${info.response}`)
                    return "Something went wrong"
                }
            });
            return secretKey;
        }catch (e) {
            return "Something went wrong"
        }
    }
}

export default new MailService()