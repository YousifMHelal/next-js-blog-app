import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.logo}>dev</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          ducimus natus aspernatur temporibus hic optio, nam ea ullam incidunt
          voluptates. Consectetur animi ab omnis mollitia quas sed fugit minima
          veniam reprehenderit molestias?
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
          <Image src="/youtube.png" alt="youtube" width={24} height={24} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/"> home</Link>
          <Link href="/"> blog</Link>
          <Link href="/"> content</Link>
          <Link href="/"> about</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/"> style</Link>
          <Link href="/"> travel</Link>
          <Link href="/"> more</Link>
          <Link href="/"> fashion</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/"> facebook</Link>
          <Link href="/"> instagram</Link>
          <Link href="/"> youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
