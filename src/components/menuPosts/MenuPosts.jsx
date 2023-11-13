import React from 'react'
import styles from './menuPosts.module.css'
import Link from 'next/link';
import Image from 'next/image';

const MenuPosts = ({withImg}) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImg && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.img} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h4 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </h4>
          <div className={styles.detail}>
            <span className={styles.username}>john doe</span>
            <span className={styles.date}> - 01.05.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImg && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.img} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h4 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </h4>
          <div className={styles.detail}>
            <span className={styles.username}>john doe</span>
            <span className={styles.date}> - 01.05.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImg && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.img} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h4 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </h4>
          <div className={styles.detail}>
            <span className={styles.username}>john doe</span>
            <span className={styles.date}> - 01.05.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImg && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.img} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h4 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </h4>
          <div className={styles.detail}>
            <span className={styles.username}>john doe</span>
            <span className={styles.date}> - 01.05.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MenuPosts