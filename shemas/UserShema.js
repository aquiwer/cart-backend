import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
    username: {type: String},
    password: {type: String},
    email: {type: String},
    balance: {type: Number},
    photo: {type: String},
    isAuth: {type: Boolean}

})

export default mongoose.model("UserLogIn", UserShema);