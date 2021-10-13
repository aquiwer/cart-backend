import ProductShema from "../shemas/ProductShema.js";

class ProductService {
    async createProduct(product) {
        return await ProductShema.create(product);
    }
    async getProducts() {
        return ProductShema.find();
    }
    async getCurrentProduct(id) {
        return await ProductShema.findOne({_id: id});
    }

}

export default new ProductService()