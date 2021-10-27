import mongoose from "mongoose";

const FavoriteShema = new mongoose.Schema({
    title: {type: String, required: true},
    describe: {type: String, required: true},
    price: {type: String, required: true},
    photo: {type: String, required: true},
})

export default mongoose.model("Favorite", FavoriteShema);