const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/userModel');



const login = async (req, res)=> {
    const {email, password}=req.body
    // 1.find user using mail
    const user = await User.findOne({email:email});
    // 2.if user is not found send error
    if(!user){
        return res.status(401).send("unautherized access")
    }
    // 3.if user is exist, check password
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if(passwordMatch){
        const token = jwt.sign({ _id:user._id, email:user.email,name:user.name }, process.env.TOKEN_SECRET_KEY);

        res.cookie('token',token,{httpOnly:true, secure: process.env.ENVIRONMENT==="develepment"? false : true, maxAge: 1 * 60 * 60 * 1000})

        res.send("logged in")
    }
    else{
        res.status(401).send("Unauthorized access")
    }
}

   const verifyLogin = async (req, res) =>{
       res.status(200).json(req.user)
  }

module.exports = {
    login,
    verifyLogin
}