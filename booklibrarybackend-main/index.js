require('dotenv').config()
const express = require('express')
var cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const bookRouter = require("./router/bookRouter")
const authorRouter = require("./router/authorRouter")
const userRouter = require("./router/userRouter")
const authRouter = require('./router/authRouter')
const app = express()
const port = 999
app.use(cors({
  credentials:true,
  origin:true
}))
app.use(express.json())
app.use(cookieParser())
app.use('/books', bookRouter)
app.use('/authors', authorRouter)
app.use('/users', userRouter)
app.use('/auth', authRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




main().then(response =>console.log('conected') ).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);

}