const jwt = require('jsonwebtoken');
const checkLogin = async (req, res, next)=>{
    if(req.cookies.token){
       try{
        const userData = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET_KEY)
        req.user = userData
        next();
       }catch(error){
        res.status(401).send("unautherized access")
       }
    } else{
        res.status(401).send("unautherised access")
    }
}

module.exports = {
    checkLogin
}