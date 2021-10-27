import FavoriteShema from "../shemas/FavoriteShema.js";
import ProductShema from "../shemas/ProductShema.js";
import FileServer from "./FileServer.js";

class FavoriteService {
    async findProduct(id) {
        return ProductShema.find({_id: id});

    }

    async showProductsFromFavorite() {
        return FavoriteShema.find();
    }
    async addToFavorite(product, photo){
        const fileName = FileServer.saveFile(photo);
        return FavoriteShema.create({...product, photo: fileName})
    }
    async deleteItemFromFavorite(id) {
        return FavoriteShema.findByIdAndDelete(id);
    }
}

export default new FavoriteService()