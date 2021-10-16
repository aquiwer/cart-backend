import CartService from "../services/CartService.js";

class CartController {

    async addToCart(req, res) {
        try {
            const response = await CartService.addToCart(req.body);
            console.log(response, "cart")
            return res.json(response);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async showProductsForCart(req, res) {
        try {
            const response = await CartService.showProductsForCart();
            return res.json(response);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async deleteItemFroCart(req, res) {
        try {
            const response = await CartService.deleteItemFromCart(req.params.id);
            if(!response){
                return res.status(404).json("Id not found")
            }
            return res.json(response);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
}

export default new CartController()