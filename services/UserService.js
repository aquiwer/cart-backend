import UserShema from "../shemas/UserShema.js";

class UserService {
    async create(user) {
        const {password} = user;
        if (password.length >= 8) {
            return await UserShema.create(user)
        }
    }

    async login(user) {

        return UserShema.findOne(user);
    }
}

export default new UserService()