"use client"
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Link href="/" className={styles.logo}>
                        📚 BookCompare
                    </Link>

                    <div className={styles.navLinks}>
                        <Link href="/homepage" className={styles.navLink}>Home</Link>
                        <Link href="/compare" className={styles.navLink}>Compare</Link>
                        <Link href="/reviews" className={styles.navLink}>Reviews</Link>
                        <Link href="/about" className={styles.navLink}>About</Link>
                    </div>

                    <div className={styles.authButtons}>
                        <Link href="/login" className={`${styles.authButton} ${styles.loginButton}`}>
                            Sign In
                        </Link>
                        <Link href="/signup" className={`${styles.authButton} ${styles.registerButton}`}>
                            Register
                        </Link>
                    </div>

                    <button 
                        className={styles.mobileMenuButton}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
                    <Link href="/homepage" className={styles.navLink}>Home</Link>
                    <Link href="/compare" className={styles.navLink}>Compare</Link>
                    <Link href="/reviews" className={styles.navLink}>Reviews</Link>
                    <Link href="/about" className={styles.navLink}>About</Link>
                    <div className={styles.authButtons}>
                        <Link href="/login" className={`${styles.authButton} ${styles.loginButton}`}>
                            Sign In
                        </Link>
                        <Link href="/signup" className={`${styles.authButton} ${styles.registerButton}`}>
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
