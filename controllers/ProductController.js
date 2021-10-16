import ProductService from "../services/ProductService.js";

class ProductController {

    async createProduct(req, res) {
        try {
            const response = await ProductService.createProduct(req.body);
            !response && res.json(404);
            return res.json(response);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getProduct(req, res) {
        try {
            const response = await ProductService.getProducts();
            const notFoundPicture = "https://www.mastertoysinc.com/image/catalog/pages/page-404-icon.png";
            console.log(Object.assign({photo: notFoundPicture}, response), "get")
            return res.json(Object.assign(response, {photo: notFoundPicture}));
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getCurrentProduct(req, res){
        try {
            const response = await ProductService.getCurrentProduct(req.params.id);
            console.log(response, "current")
            return res.json(response)
        }catch (e) {
            res.status(500).json(e.message);
        }
    }
}

export default new ProductController()