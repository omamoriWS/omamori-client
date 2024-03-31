"use client";
import React from "react";
import styles from "@/src/app/login/page.module.scss";
import Image from "next/image";
import logo from "@/public/logo_jp.png";
import kakaoLogin from "@/public/kakaoLoginBtn.png";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div className={styles.upper}>
      <div className={styles.form}>
        <Image className={styles.logo} src={logo} alt="logo" />
        <h2>서비스 이용을 위해 로그인해주세요</h2>
        <Image
          onClick={() => {}}
          className={styles.kakaoLogin}
          src={kakaoLogin}
          alt="kakaoLogin"
        />
        <button
          onClick={() => {
            router.back();
          }}
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
};

export default page;
