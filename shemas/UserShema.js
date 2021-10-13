import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},

})

export default mongoose.model("UserLogIn", UserShema);