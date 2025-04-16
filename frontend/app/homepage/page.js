import React from 'react'
import styles from './../../styles/homepage.module.css'
const Page = () => {
  return (
    <div className={styles.container}>
        <div className={styles.searchSection}><input type='search' placeholder='     Search for a Book or Author.....'/></div>
        <div><h1>Trending Books</h1>

        </div>
    </div>


  )
}

export default Page
