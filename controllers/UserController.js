import UserService from "../services/UserService.js";
import {validationResult} from "express-validator";

class UserController {
    async register(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при регистрации", errors})
            }
            const response = await UserService.create(req.body);
            if (response.statusCode === 400) {
                return res.status(400).json({message: "Ошибка при регистрации, такой аккаунт уже существует!", errors})
            } else {
                res.json(Object.assign({isAuth: true}, response?._doc))
            }
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async login(req, res) {
        try {

            const response = await UserService.login(req.body);

            Boolean(response) ? res.json(Object.assign({isAuth: true}, response?._doc ?? "Server error!")) : res.status(404).json("Account is not found");

        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async changeData(req, res) {
        try {
            const response = await UserService.changeData(req.body);
            return res.json(response)
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }
}

export default new UserController()