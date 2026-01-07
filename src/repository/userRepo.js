import {Baserepository} from "./baseRepo.js"
import UserModel from "../models/userModel.js"

export class Userrepository extends Baserepository {
    FindByEmail(email){
        return UserModel.findOne({email})
    }
    create(user){
        return UserModel.create(user)
    }
}

