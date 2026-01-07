const errorhandler = (err ,req , res , next)=>{
    res.status(err.stauscode||500).json({
        sucssess : false,
        messege : err.messege||"internal server error"
    })
    
}

export default errorhandler