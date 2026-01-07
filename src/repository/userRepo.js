import { BaseRepository } from "./baseRepo.js";
import Users from "../models/users.js"

export class UserRepository extends BaseRepository {
   
    create(user){
        Users.create(user)
    }

    findOne(email){
        Users.findOne(email)
    }
}