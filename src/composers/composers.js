import AuthControl from "../controllers/authContrl.js";
import AuthService from "../services/authServices.js";
import { UserRepository } from "../repository/userRepo.js";

export const authComposer = ()=>{
   const userRepo = new UserRepository()
   const authService = new AuthService(userRepo)
   const authcontrol = new AuthControl(authService)
   return authcontrol
}

