import {Router} from "express";
import ProductController from "../controllers/ProductController.js";
import UserController from "../controllers/UserController.js";
import CartController from "../controllers/CartController.js";

const router = new Router();

router.post("/create-product", ProductController.createProduct)
router.get("/products", ProductController.getProduct)
router.get('/product/:id', ProductController.getCurrentProduct)

router.post("/cart", CartController.addToCart)
router.get('/cart', CartController.showProductsForCart)
router.delete('/cart/:id', CartController.deleteItemFroCart)

router.post('/login', UserController.login)
router.post('/register', UserController.register)
export default router;
