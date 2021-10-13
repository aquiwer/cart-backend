import mongoose from "mongoose";

const CartShema = new mongoose.Schema({
    title: {type: String, required: true},
    describe: {type: String, required: true},
    count: {type: Number, required: true},
    price: {type: Number, required: true},
    photo: {type: String},

})

export default mongoose.model("Cart", CartShema);