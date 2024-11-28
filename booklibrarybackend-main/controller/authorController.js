const Author = require("../model/authorModel");

const getAllAuthor = async (req, res) => {
   const authors = await Author.find({});
    res.json(authors)
  }

const getAuthorById = async (req, res) => {
    const author = await Author.findById(req.params.authorId).exec();
    res.json(author)
  }

const addAuthor = async (req, res) => {
    // 1.get data from request body
    const data = req.body
    // 2.create document usin data
     const author = new Author(data)
    // 3.save document to database
    await author.save()
    res.json(author)
  }

const updateAuthor = async (req, res) => {
    const updatedAuthor = await Author.findByIdAndUpdate(req.params.authorId, req.body, {new:true})
    res.json(updatedAuthor)
  }

const deleteAuthor = async (req, res) => {
    await Author.findByIdAndDelete(req.params.authorId)
    res.send('deleted')
  }

  module.exports = {
    getAllAuthor,
    getAuthorById,
    addAuthor,
    updateAuthor,
    deleteAuthor
  }