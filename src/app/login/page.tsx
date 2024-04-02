"use client";
import React from "react";
import styles from "@/src/app/login/page.module.scss";
import Image from "next/image";
import logo from "@/public/logo_jp.png";
import kakaoLogin from "@/public/kakaoLoginBtn.png";
import { useRouter } from "next/navigation";
import { signIn, getSession } from "next-auth/react";
import { useEffect, useState } from "react";

const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/"); // 추후 서버에서 직접 redirect url 내려주도록 변경
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);
  if (isLoading) {
    return <p>Loading...</p>; // 로딩 컴포넌트 작성할 것
  } else {
    return (
      <div className={styles.upper}>
        <div className={styles.form}>
          <Image className={styles.logo} src={logo} alt="logo" />
          <h2>서비스 이용을 위해 로그인해주세요</h2>
          <Image
            onClick={() => {
              signIn("kakao");
            }}
            className={styles.kakaoLogin}
            src={kakaoLogin}
            alt="kakaoLogin"
          />
          <button
            onClick={() => {
              router.back();
            }}>
            뒤로가기
          </button>
        </div>
      </div>
    );
  }
};

export default page;
