import express from "express"
import {authComposer} from "../composers/composer.js"
const router = express.Router()

const auth = authComposer()

router.post("/register" , auth.register)
router.post("/login" , auth.login)

export default router




