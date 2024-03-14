import styles from "./Login.module.css";
import BackButton from "./_component/BackButton/BackButton";
import KakaoLoginModal from "./_component/KakaoLoginModal/KakaoLoginModal";
import LoginForm from "./_component/LoginForm/LoginForm";
export default function loginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.logoSection}>
        <img src={"/오마모리_로고.png"} alt="logo" />
      </div>
      <div className={styles.span}>서비스 이용을 위해 로그인해주세요</div>
      {/* <section className={styles.formSection}>
        <LoginForm />
      </section> */}
      <section className={styles.kakaoButton}>
        <KakaoLoginModal />
      </section>
      <section className={styles.backButton}>
        <BackButton />
      </section>
    </div>
  );
}
