import ProductService from "../services/ProductService.js";

class ProductController {

    async createProduct(req, res) {
        try {
            const response = await ProductService.createProduct(req.body, req.files.photo);
            !response && res.json(404);
            return res.json(response);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getProduct(req, res) {
        try {
            const response = await ProductService.getProducts();
            return res.json(response);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getCurrentProduct(req, res){
        try {
            const response = await ProductService.getCurrentProduct(req.params.id);
            return res.json(response)
        }catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getProductsByType(req,res){
        try {
            const response = await ProductService.getProducts(req.params.type);
            return res.json(response)
        }catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new ProductController()