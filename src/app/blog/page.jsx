import React from "react";
import styles from "./blogPage.module.css";
import CardList from "@/components/cardList/CardLIst";
import Menu from "@/components/menu/Menu";

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>styles blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default page;
