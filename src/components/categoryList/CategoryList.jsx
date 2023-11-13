import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getDate = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed to fetch");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getDate();
  console.log(data);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>popular category</h1>
      <div className={styles.categories}>
        {data.map((item) => (
          <Link
            key={item.id}
            href="/blog?/cat=style"
            className={`${styles.category} ${styles[item.slug]}`}>
            {item.img && (
              <Image
                src={item.img}
                alt="style"
                width={32}
                height={32}
                className={styles.img}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
