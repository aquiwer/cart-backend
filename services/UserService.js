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

    async changeData(userData) {
        return UserShema.findByIdAndUpdate(userData._id, userData, {new: true});

    }
}

export default new UserService()