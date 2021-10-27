import ProductShema from "../shemas/ProductShema.js";
import FileServer from "./FileServer.js";

class ProductService {
    async createProduct(product, photo) {
        const fileName = FileServer.saveFile(photo);
        return await ProductShema.create({...product, photo: fileName});
    }
    async getProducts(type) {
        return ProductShema.find({type: type});
    }
    async getCurrentProduct(id) {
        return ProductShema.findOne({_id: id});
    }

}

export default new ProductService()