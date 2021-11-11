import {Router} from "express";
import ProductController from "../controllers/ProductController.js";
import UserController from "../controllers/UserController.js";
import CartController from "../controllers/CartController.js";
import FavoriteController from "../controllers/FavoriteController.js";
import {check} from "express-validator";

const router = new Router();

router.post("/create-product", ProductController.createProduct)
router.get("/products/:type", ProductController.getProductsByType)
router.get('/product/:id', ProductController.getCurrentProduct)

router.post("/cart",CartController.addToCart)
router.get('/cart', CartController.showProductsForCart)
router.delete('/cart/:id', CartController.deleteItemFroCart)

router.put('/user', UserController.changeData)
router.post('/user', [
    check("username", "Name must be not empty and include more than 4 symbols").notEmpty().isLength({min: 4})],
    check("password", "Password must be not empty and include more than 8 symbols").notEmpty().isLength({min: 6}), UserController.register)
router.post('/favorite', FavoriteController.addToFavorite)
router.post('/login', UserController.login)
router.post('/register', UserController.register)
export default router;
