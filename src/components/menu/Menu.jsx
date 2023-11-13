import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCat from "../menuCat/MenuCat";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subTitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most popular</h1>
      <MenuPosts withImg={false} />
      <h2 className={styles.subTitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCat/>
      <h2 className={styles.subTitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors pick</h1>
      <MenuPosts withImg={true} />
    </div>
  );
};

export default Menu;
