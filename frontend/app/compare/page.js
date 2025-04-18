"use client"
import React, { useState, useEffect } from 'react'
import styles from './../../styles/compare.module.css'
import BookCard from '@/components/BookCard'
import { useRouter } from 'next/navigation'

const ComparePage = () => {
    const [selectedBooks, setSelectedBooks] = useState([])
    const [books, setBooks] = useState([])
    const [priceData, setPriceData] = useState({})
    const router = useRouter()

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:5000/fetchAllBooks')
                const data = await response.json()
                setBooks(data.data)
            } catch (err) {
                console.error("Error fetching books:", err)
            }
        }
        fetchBooks()
    }, [])

    const handleBookSelect = (book) => {
        if (selectedBooks.length < 2 && !selectedBooks.find(b => b.unique_id === book.unique_id)) {
            setSelectedBooks([...selectedBooks, book])
            fetchPriceData(book.unique_id)
        }
    }

    const fetchPriceData = async (bookId) => {
        try {
            const response = await fetch(`http://localhost:5000/getBookPrices/${bookId}`)
            const data = await response.json()
            setPriceData(prev => ({
                ...prev,
                [bookId]: data.prices
            }))
        } catch (err) {
            console.error("Error fetching price data:", err)
        }
    }

    const removeBook = (bookId) => {
        setSelectedBooks(selectedBooks.filter(book => book.unique_id !== bookId))
        const newPriceData = { ...priceData }
        delete newPriceData[bookId]
        setPriceData(newPriceData)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Compare Books</h1>
            <p className={styles.subtitle}>Select up to 2 books to compare prices across different sellers</p>

            <div className={styles.selectedBooks}>
                {selectedBooks.map(book => (
                    <div key={book.unique_id} className={styles.selectedBook}>
                        <button 
                            className={styles.removeButton}
                            onClick={() => removeBook(book.unique_id)}
                        >
                            ×
                        </button>
                        <BookCard 
                            image={book.image_url}
                            name={book.book_name}
                            author={book.book_author}
                        />
                        {priceData[book.unique_id] && (
                            <div className={styles.priceComparison}>
                                <h3>Price Comparison</h3>
                                <div className={styles.priceList}>
                                    {priceData[book.unique_id].map((price, index) => (
                                        <div key={index} className={styles.priceItem}>
                                            <span className={styles.seller}>{price.seller}</span>
                                            <span className={styles.price}>₹{price.price}</span>
                                            <a 
                                                href={price.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className={styles.buyButton}
                                            >
                                                Buy Now
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {selectedBooks.length < 2 && (
                <div className={styles.availableBooks}>
                    <h2>Available Books</h2>
                    <div className={styles.booksGrid}>
                        {books
                            .filter(book => !selectedBooks.find(b => b.unique_id === book.unique_id))
                            .map(book => (
                                <div 
                                    key={book.unique_id} 
                                    className={styles.bookCard}
                                    onClick={() => handleBookSelect(book)}
                                >
                                    <BookCard 
                                        image={book.image_url}
                                        name={book.book_name}
                                        author={book.book_author}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default ComparePage
