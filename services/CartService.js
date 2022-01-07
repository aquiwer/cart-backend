import CartShema from "../shemas/CartShema.js";
import UserShema from "../shemas/UserShema.js";


class CartService {
    async addToCart(data) {
        // console.log(data)
        const products = await UserShema.findOne({_id: data.userId});
        return UserShema.findByIdAndUpdate(data.userId, {cart: [...products.cart, data.productData]}, {new: true});
    }

    async showProductsForCart() {
        return CartShema.find();
    }

    async deleteItemFromCart(id) {
        return CartShema.findByIdAndDelete(id);
    }
}

export default new CartService()