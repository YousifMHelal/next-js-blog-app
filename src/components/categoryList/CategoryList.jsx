import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>popular category</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?/cat=style"
          className={`${styles.category} ${styles.style}`}>
          <Image
            src="./style.png"
            alt="cat"
            width={32}
            height={32}
            className={styles.img}
          />
          style
        </Link>
        <Link
          href="/blog?/cat=style"
          className={`${styles.category} ${styles.style}`}>
          <Image
            src="./style.png"
            alt="cat"
            width={32}
            height={32}
            className={styles.img}
          />
          style
        </Link>
        <Link
          href="/blog?/cat=style"
          className={`${styles.category} ${styles.style}`}>
          <Image
            src="./style.png"
            alt="cat"
            width={32}
            height={32}
            className={styles.img}
          />
          style
        </Link>
        <Link
          href="/blog?/cat=style"
          className={`${styles.category} ${styles.style}`}>
          <Image
            src="./style.png"
            alt="cat"
            width={32}
            height={32}
            className={styles.img}
          />
          style
        </Link>
        <Link
          href="/blog?/cat=style"
          className={`${styles.category} ${styles.style}`}>
          <Image
            src="./style.png"
            alt="cat"
            width={32}
            height={32}
            className={styles.img}
          />
          style
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
