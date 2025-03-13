import Image from "next/image";
import Link from "next/link";
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>LIF</h1>
        <p className={styles.slogan}>Life, Intelligence, Future</p>
        <div className={styles.buttonContainer}>
          <Link 
            href="/login" 
            className={styles.loginButton}
          >
            로그인 페이지로 이동
          </Link>
        </div>
      </div>
    </div>
  );
} 