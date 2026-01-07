export const errorhandler = (err , req , res , next)=>{
    res.status(err.statusCode||500).json({
        sucsess : false,
        messege : err.message || "internal server error"
    })
}