import express from "express"
import dotenv from "dotenv"
import authrouter from "./src/routers/routers.js"
import adminrouter from "./src/routers/adminrouter.js"
import database from "./src/config/db.js"
import errorhandler from "./src/middlewares/errorhandler.js"


dotenv.config()
const app = express()
const PORT = process.env.PORT||8080
// using the middlewares 
app.use(express.json())
database()

app.use("/api/authentication" , authrouter)
app.use("/api/admin" , adminrouter)
app.use(errorhandler)

// stating the server

app.listen(PORT,()=>{
    console.log('server listerning on the local host port 8080');
    
})