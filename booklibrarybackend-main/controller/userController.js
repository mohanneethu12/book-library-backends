const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require("../model/userModel")

const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.json(users)
  }

const addUser = async (req, res) => {
    // 1.get data from request body
    const data = req.body
    const hash = bcrypt.hashSync(data.password, saltRounds);
    // 2.create document using data 
    const user = new User({
        ...data,
        password:hash
    })
    // 3.save document to database
    await user.save();
    resizeTo.json(user)
    
  }

  module.exports = {
    getAllUsers,
    addUser
  }