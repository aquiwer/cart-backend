import UserService from "../services/UserService.js";
import MailService from "../services/MailService.js";
import {validationResult} from "express-validator";
import bcrypt from "bcryptjs";

let state = {
    code: undefined
}
class UserController {


    async sendUniqCodeToUser(req, res) {
        const head = Date.now().toString(36);
        const tail = Math.random().toString(36).substr(200);

        let secretKey = (head + tail).toUpperCase();

        state.code = secretKey;

        const {email} = req.body;

        await MailService.sendUniqCode(email, secretKey);

        return res.json({message: "Code sent."})

    }

    async checkUniqCodes(req, res) {
        try {
            const {uniqCode} = req.body;
            console.log(uniqCode, 'user code')
            console.log(state.code, 'state code')
            if (uniqCode === state.code) {
                return res.json(true)
            } else {
                res.status(400).json({message: "Uniq code is incorrect! Try again."})
            }
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async register(req, res) {
        try {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при регистрации", errors})
            }

            const response = await UserService.create(req.body);
            if (response.statusCode === 400) {
                return res.status(400).json({message: "Ошибка при регистрации, такой юзер уже существует!", errors})
            } else {
                res.json(Object.assign({isAuth: true}, response?._doc))
            }
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async login(req, res) {
        try {
            const {login, username, password} = req.body

            const user = await UserService.findUser({username, login})

            if (!user) {
                return res.status(400).json({message: `Пользователь ${username} не найден`})
            }

            const validPassword = bcrypt.compareSync(password, user.password)

            if (!validPassword) {
                return res.status(400).json({message: `Введен неверный пароль`})
            } else {
                return res.json(Object.assign({isAuth: true, ...user._doc}))
            }


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