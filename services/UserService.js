import UserShema from "../shemas/UserShema.js";

class UserService {
    async create(user) {
        const {password} = user;
        if (password.length >= 8) {
            return await UserShema.create(user)
        }else {
            return false;
        }
    }

    async login(user) {

        return await UserShema.findOne(user);
    }
}

export default new UserService()