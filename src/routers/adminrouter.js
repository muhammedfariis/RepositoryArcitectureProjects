import {RoleMiddleware} from "../middlewares/userRole.js"
import { AuthValidation } from "../middlewares/auth_middle.js"
import express from "express"
import { authComposer } from "../composers/composer.js"

const auth = authComposer()

const router = express.Router()

router.get("/" , AuthValidation , RoleMiddleware("admin"), (req ,res)=>{
    res.json({
        messege : "welcome user admin"
    })
})

export default router