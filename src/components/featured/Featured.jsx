import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="post" fill className={styles.img} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
          <p className={styles.postDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            distinctio molestias non reiciendis vel earum, tempora dolore eum
            aperiam velit doloremque nihil mollitia corrupti quis fugit neque
            deleniti.
          </p>
          <button className={styles.btn}>read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
