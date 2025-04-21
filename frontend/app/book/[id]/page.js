import React from 'react';
import styles from '../../../styles/bookDetals.module.css';

const getAllBooks = async () => {
    const url = `http://localhost:5000/fetchAllBooks`;
    const response = await fetch(url);
  
    const data = await response.json();
    
     return data.data;
};

export const generateStaticParams = async () => {
  const books = await getAllBooks();
  return books.map((book) => ({
    id: book.unique_id.toString(),
  }));
};  

const Page = async ({ params }) => {
  const books = await getAllBooks();

  const book = books.find((b) => b.unique_id.toString() === params.id);

  if (!book) {
    return <div className="not-found">Book not found</div>;
  }

  return (
    <div className={styles["book-details-container"]}>
      <h1 className={styles["book-title"]}>{book.book_name}</h1>
      <p className={styles["book-info"]}><strong>Author:</strong> {book.book_author}</p>
      <p className={styles["book-info"]}><strong>Rating:</strong> {book.rating} / 5</p>
      <p className={styles["book-description"]}>{book.description}</p>

      <div className={styles["sellers-section"]}>
        <h2>Available Sellers</h2>
        <ul className={styles["seller-list"]}>
          {book.sellers && book.sellers.length > 0 ? (
            book.sellers.map((seller, index) => (
              <li key={index}>{seller}</li>
            ))
          ) : (
            <li>No sellers listed</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Page;
