import UserService from "../services/UserService.js";

class UserController {
    async register(req, res){
        try {
            const response = await UserService.create(req.body);

            response ? res.json(Object.assign({isAuth: true}, response?._doc)) : res.status(400).json("Password symbols must be more than 8")
        }catch (e) {
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

    async changeData(req, res){
        try{
            const response = await UserService.changeData(req.body);
            return res.json(response)
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }
}

export default new UserController()