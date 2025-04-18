"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import styles from './../../styles/homepage.module.css'
import BookCard from '@/components/BookCard.js'
import Link from 'next/link'

const Page = () => {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/fetchAllBooks')
            const data = await response.json();
            setBooks(data.data);
        } catch (err) {
            console.log("Error hitting Api ", err);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const filteredBooks = books.filter(book => 
        book.book_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.book_author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <div className={styles.heroSection}>
                <h1 className={styles.heroTitle}>Discover Your Next Favorite Book</h1>
                <p className={styles.heroSubtitle}>Compare prices and find the best deals across multiple platforms</p>
                <Link href="/compare" className={styles.compareButton}>
                    Compare Books
                </Link>
            </div>

            <div className={styles.searchSection}>
                <input 
                    type='search' 
                    placeholder='Search for a Book or Author...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className={styles.booksSection}>
                <h2 className={styles.sectionTitle}>Trending Books</h2>
                <div className={styles.booksGrid}>
                    {filteredBooks.map((book) => (
                        <div key={book.unique_id}>
                            <BookCard 
                                image={book.image_url} 
                                name={book.book_name} 
                                author={book.book_author} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page
