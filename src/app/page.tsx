"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { usePathname, useRouter } from "../../node_modules/next/navigation";
import LOGO from "../../public/logo_jp.png";
import mainbackground from "../../public/main_background.png";

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Image src={LOGO} className={styles.LOGO} alt="logo" />
        <h1>오마이모리</h1>
        <h2>커스터마이즈드 오마모리 만들기</h2>
        <button
          onClick={() => {
            router.push("/intro");
          }}
        >
          제작하러 가기
        </button>
      </div>
    </main>
  );
}
