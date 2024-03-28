import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <form className={styles.form}>
      <section className={styles.emailSection}>
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" name="email" />
      </section>
      <section className={styles.passwordSection}>
        <label htmlFor="password">패스워드</label>
        <input type="password" id="password" name="password" />
      </section>
      <button className={styles.button}>로그인</button>
    </form>
  );
}
