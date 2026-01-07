import jwt from "jsonwebtoken"

export const genaratetoken = (payload) =>{
   return jwt.sign(
    user._id,
    process.env.JWT_SECRET,
    {expiresIn : "7d"}
   )
}

