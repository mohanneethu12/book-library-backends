const express = require('express')
const { getAllUsers, addUser } = require('../controller/userController')
const router = express.Router()

// 1.get all users
 router.get('/', getAllUsers)

// 2.add user
  router.post('/', addUser)



module.exports = router