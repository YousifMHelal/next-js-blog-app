import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>comments</h1>

      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a  comment..."
            className={styles.input}
          />
          <button className={styles.btn}>Send</button>
        </div>
      ) : (
        <Link herf="/login"> login to write a comment </Link>
      )}

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.img} />
            <div className={styles.userInfo}>
              <span className={styles.username}>john doe</span>
              <span className={styles.date}>02.04.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            aspernatur placeat maxime exercitationem? Aspernatur, temporibus,
            eligendi dolorem dolore optio illo molestiae repudiandae nihil unde
            nulla dolorum consequuntur ex atque quo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
