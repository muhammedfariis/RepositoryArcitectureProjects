const errorhandler = (err ,req , res , next)=>{
    res.status(err.stausCode||500).json({
        success : false,
        message : err.message||"internal server errror"
    })
}

export default errorhandler

