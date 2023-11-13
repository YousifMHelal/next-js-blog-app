"use client";
import React, { useState } from "react";
import styles from "./witePage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.btn} onClick={() => setOpen(!open)}>
          <Image src="/youtube.png" alt="" width={16} height={16} />
        </button>

        {open && (
          <div className={styles.add}>
            <button className={styles.addBtn}>
              <Image src="/facebook.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addBtn}>
              <Image src="/facebook.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addBtn}>
              <Image src="/facebook.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Write your blog..."
          className={styles.textarea}
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
