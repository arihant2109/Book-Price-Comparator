import React from "react";
import Image from "next/image";
import styles from "../styles/BookCard.module.css";

const BookCard = ({ image, name, author }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <Image
          
          alt={name}
          width={100}
          height={100}
          className={styles.bookImage}
        />
        <div>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.author}>by {author}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;