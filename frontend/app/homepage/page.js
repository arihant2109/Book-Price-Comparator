import React from 'react'
import styles from './../../styles/homepage.module.css'
import BookCard from '@/components/BookCard'
const Page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.searchSection}><input type='search' placeholder='    Search for a Book or Author.....'/></div>
        <div><h1>Trending Books</h1>
        
      <BookCard/>
        </div>
    </div>


  )
}

export default Page
