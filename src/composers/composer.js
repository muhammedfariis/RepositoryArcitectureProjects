import Authcontroller from "../controllers/authContrl.js";
import Authservice from "../services/authServices.js";
import { Userrepository } from "../repository/userRepo.js";

export const authComposer = () => {
  const userrepo = new Userrepository();
  const authservices = new Authservice(userrepo);
  const authcontroller = new Authcontroller(authservices);

  return authcontroller;
};

