import express from 'express'

import fetchBooks from '../controllers/fetchBooks.js';

const router = express.Router();

router.use('/fetchAllBooks',fetchBooks);