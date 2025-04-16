import express from 'express';
import { fetchAllBooks } from '../services/fetchBooks.js';

const router = express.Router();

router.get('/',fetchAllBooks);

export default router;