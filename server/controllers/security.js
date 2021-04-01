module.exports.LoginRequire = (req, res, next)=>{
    if(req.user){
        next();
    }else{
        next({ code:403, msg: "you need to be logged in to access this resource" })
    }
}