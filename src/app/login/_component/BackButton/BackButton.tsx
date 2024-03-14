"use client";
import { useRouter } from "next/navigation";
import styles from "./BackButton.module.css";

export default function BackButton() {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <button className={styles.button} onClick={handleClick}>
      뒤로가기
    </button>
  );
}
