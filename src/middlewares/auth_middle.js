import { HTTP_STATUS } from "../constants/httpstatus";
import { HTTP_MESSEGES } from "../constants/httpmsg";
import { tokenverify } from "../utils/jwt.js";

export const AuthValidation = (req, res, next) => {
  try {
    const headers = req.headers.authorization;
    if (!headers) {
      return res.status(HTTP_STATUS.UNAUTHARIZED).json({
        messege: HTTP_MESSEGES.UNAUTHOROZIED,
      });
    }
    const token = headers.split(" ")[1];

    const decoded = tokenverify(token);

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      messege: HTTP_MESSEGES.SERVER_ERROR,
    });
  }
};
