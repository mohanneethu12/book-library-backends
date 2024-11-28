const Book = require("../model/bookModel");

const getAllBooks =async (req, res) => {
   const books = await Book.find({});
    res.json(books)
  }

const getBookById = async (req, res) => {
    const book = await Book.findById(req.params.bookId).exec();
    res.json(book)
  }

const addBook = async (req, res) => {
    // 1.get data from request body 
    const data = req.body
    // 2.create document usig that data 
    const book = new Book(data)
    // 3.save decument to database
    await book.save();
    res.json(book)
  }

const updateBook = async (req, res) => {
   const updatedBook = await A.findByIdAndUpdate(req.params.bookId, req.body, {new:true})
    res.json(updatedBook)
  }

const deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.bookId)
    res.send('deleted')
  }

  module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
  }