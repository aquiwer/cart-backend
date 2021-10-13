import mongoose from "mongoose";

const ProductShema = new mongoose.Schema({
    title: {type: String, required: true},
    describe: {type: String, required: true},
    count: {type: Number, required: true},
    price: {type: String, required: true},
    photo: {type: String},

})

export default mongoose.model("Product", ProductShema);