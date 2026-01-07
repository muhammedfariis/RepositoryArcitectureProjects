import { MESSAGE, Status } from "../constants/http.js";
import { genaratetoken } from "../utils/jwt.js";
import { hashpassword, comparepassword } from "../utils/hash.js";
import { ApiError } from "../Errors/errors.js";

class AuthService {
  constructor(UserRepository) {
    this.UserRepository = UserRepository;
  }

  async register({ userName, email, password }) {
    const existing = await this.UserRepository.findOne(email);
    if (existing) {
      throw new ApiError(MESSAGE.USER_EXIST, Status.CONFLICT);
    }
    const passhash = await hashpassword(password);

    const user = await this.UserRepository.create({
      userName,
      email,
      password: passhash,
    });

    return {
      messege: "registeration completed",
      user
    };
  }

  async login({ email, password }) {
    const user = await this.UserRepository.findOne(email);
    if (!user) {
      throw new ApiError(MESSAGE.USER_NOT_FOUND, Status.UNAUTHORAIZED);
    }
    const compare =  await comparepassword(password, user.password);

    const tokens = await genaratetoken(user._id);

    return {
      messege: "login successfully",
      user,
      tokens,
    };
  }
}

export default AuthService
