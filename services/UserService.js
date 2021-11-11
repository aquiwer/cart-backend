import UserShema from "../shemas/UserShema.js";
import bcrypt from 'bcryptjs';
import {validationResult} from "express-validator";

class UserService {
    async create(user) {
        const {password, login} = user;
        const hashedPassword = bcrypt.hashSync(password, 3);
        const candidate = await UserShema.findOne({login});
        if(candidate){
            return {statusCode: 400, message: "Пользователь с таким именем уже существует"};
        }

        return await UserShema.create({...user, password: hashedPassword})

    }

    async login(user) {
        const {login, password} = user;
        return UserShema.findOne({login, password});
    }

    async changeData(userData) {
        return UserShema.findByIdAndUpdate(userData._id, userData, {new: true});
    }
    async findUser(user){
        return UserShema.findOne(user);
    }
}

export default new UserService()