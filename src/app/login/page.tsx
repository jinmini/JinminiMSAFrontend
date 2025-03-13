import React from 'react';
import Link from 'next/link';
import styles from './login.module.css';

export default function LoginPage() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <h1 className={styles.logo}>LIF</h1>
          <p className={styles.slogan}>Life, Intelligence, Future</p>
        </Link>
      </div>
      <div className={styles.loginCard}>
        <h1 className={styles.title}>로그인</h1>
        
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="username" className="sr-only">아이디</label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className={styles.input}
              placeholder="아이디를 입력해주세요"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password" className="sr-only">비밀번호</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className={styles.input}
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
          
          <div className={styles.forgotLinks}>
            <Link href="/forgot-id" className={styles.link}>
              아이디 찾기
            </Link>
            <span className={styles.separator}>|</span>
            <Link href="/forgot-password" className={styles.link}>
              비밀번호 찾기
            </Link>
          </div>
          
          <button
            type="submit"
            className={styles.loginButton}
          >
            로그인
          </button>
        </form>
        
        <button
          type="button"
          className={styles.signupButton}
        >
          회원가입
        </button>
      </div>
    </div>
  );
} 