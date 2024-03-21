"use client";
import styles from "./KakaoLoginModal.module.css";
import { useRouter } from "next/navigation";

export default function KakaoLoginModal() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/login/kakaoLogin");
  };
  return <button className={styles.button} onClick={handleClick}></button>;
}
