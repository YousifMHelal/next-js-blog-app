import Link from 'next/link';
import React from 'react'
import styles from "./menuCat.module.css";

const MenuCat = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}>
        style
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}>
        style
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}>
        style
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}>
        style
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}>
        style
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}>
        style
      </Link>
    </div>
  );
}

export default MenuCat