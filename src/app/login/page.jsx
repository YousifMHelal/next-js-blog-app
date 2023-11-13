"use client";
import React from "react";
import styles from "./login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
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
      <div className={styles.wrapper}>
        <div className={styles.socialBtn} onClick={() => signIn("google")}>
          sign in with google
        </div>
        <div className={styles.socialBtn}>sign in with github</div>
        <div className={styles.socialBtn}>sign in with facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
