import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
    login: {type: String, unique: true},
    username: {type: String},
    password: {type: String},
    email: {type: String},
    balance: {type: Number},
    photo: {type: String},
    isAuth: {type: Boolean},
    cart: {type: Array, ref: 'CartShema'},
    liked: [{type: Object, ref: 'FavoriteShema'}]

})

export default mongoose.model("UserLogIn", UserShema);