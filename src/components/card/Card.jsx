import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="post" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2021 </span>
          <span className={styles.category}>- CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          necessitatibus blanditiis hic corrupti harum dignissimos nam laborum
          fuga?
        </p>
        <Link className={styles.link} href="/"> Read More</Link>
      </div>
    </div>
  );
};

export default Card;
