import {HTTP_MESSEGES} from "../constants/httpmsg.js"
import { HTTP_STATUS } from "../constants/httpstatus.js"

export const RoleMiddleware = (role)  => (req , res , next)=>{
   if(req.user.role !== role){
    return res.status(HTTP_STATUS.FORRIBDEN).json({
        messege : HTTP_MESSEGES.FORRIBDEN
    })
   }
   next()
}

