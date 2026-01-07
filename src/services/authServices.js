import { hashingPassword, comparePassword } from "../utils/hash.js";
import { tokenCreation} from "../utils/jwt.js";
import { HTTP_STATUS } from "../constants/httpstatus.js";
import { HTTP_MESSEGES } from "../constants/httpmsg.js";
import { ApiError } from "../Errors/apierror.js";

class Authservice {
  constructor(Userrepository) {
    this.Userrepository = Userrepository;
  }

  //    registering

  async register({ userName, email, password, role }) {
    
    const existing = await this.Userrepository.FindByEmail(email);
    if (existing) {
      throw new ApiError(HTTP_STATUS.CONFLICT, HTTP_MESSEGES.USER_EXIST);
    }

    const hash = await hashingPassword(password);

    const user = await this.Userrepository.create({
      userName,
      email,
      password: hash,
      role,
    });

     return {
      messege : HTTP_MESSEGES.REGISTER,
      userId : user._id,
      email : user.email

     }

  }

  // logining

  async login({ email, password }) {
    const user = await this.Userrepository.FindByEmail(email);
    if (!user) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, HTTP_MESSEGES.USER_NOT_FOUND);
    }
    const compare = await comparePassword(password, user.password);
    if (!compare) {
      throw new ApiError(
        HTTP_STATUS.UNAUTHARIZED,
        HTTP_MESSEGES.INVALID_CREDENTIAL
      );
    }
    const token = tokenCreation({
      id: user._id,
      role: user.role,
    });

    return {
      message: HTTP_MESSEGES.LOGIN,
      user,
      token,
    };
  }
}

export default Authservice