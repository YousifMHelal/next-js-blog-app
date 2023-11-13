import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemToggle from "../themToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>Dev</div>
      <div className={styles.links}>
        <ThemToggle />
        <Link href="/" className={styles.link} >Home</Link>
        <Link href="/" className={styles.link} >Content</Link>
        <Link href="/" className={styles.link} >About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
