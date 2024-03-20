import Image from "next/image";
import styles from "./page.module.scss";
import LOGO from "../../public/logo_jp.png";
import mainbackground from "../../public/main_background.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Image src={LOGO} className={styles.LOGO} />
        <h1>오마이모리</h1>
        <h2>커스터마이즈드 오마모리 만들기</h2>
        <button>제작하러 가기</button>
      </div>
    </main>
  );
}
