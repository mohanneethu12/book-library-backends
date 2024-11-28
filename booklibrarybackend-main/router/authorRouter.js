const express = require('express')
const { getAllAuthor, getAuthorById, addAuthor, updateAuthor, deleteAuthor } = require('../controller/authorController')
const router = express.Router()

// 1.get all author
router.get('/', getAllAuthor)
// 2.get author by id
router.get('/:authorId', getAuthorById)
// 3.add author
router.post('/', addAuthor)
// 4.update author
router.patch('/:authorId', updateAuthor)
// 5.delete author
router.delete('/:authorId', deleteAuthor)

module.exports = router