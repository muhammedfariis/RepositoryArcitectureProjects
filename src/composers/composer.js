import Authcontroller from "../controllers/authContrl";
import Authservice from "../services/authServices";
import { Userrepository } from "../repository/userRepo";

export const authComposer = () => {
  const userrepo = new Userrepository();
  const authservices = new Authservice(userrepo);
  const authcontroller = new Authcontroller(authservices);

  return authcontroller;
};

