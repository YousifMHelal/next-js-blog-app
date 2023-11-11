"use client";

import Image from "next/image";
import styles from "./themToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }>
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 2, background: "#0f172a" }
            : { right: 2, background: "white" }
        }></div>
      <div
        className={styles.ball}
        style={
          theme === "dark"
          ? { left: 2, background: "#0f172a" }
          : { right: 2, background: "white" }
        }></div>
        <Image src="/moon.png" alt="" width={14} height={14} />
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
