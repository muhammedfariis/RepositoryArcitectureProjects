import database from "./src/config/db.js";
import router from "./src/routers/routers.js";
import dotenv from "dotenv"
import { errorhandler } from "./src/middlewares/errorhandler.js";
import express from "express"
dotenv.config()
const app = express()
const PORT = process.env.PORT
database()

app.use(express.json())
app.use("/api/authentication" , router)
app.use(errorhandler)

app.listen(PORT,()=>{
    console.log("server running");
    
})


