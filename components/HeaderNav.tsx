import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/HeaderNav.module.scss";

const HeaderNav: NextPage = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowNav((prevState) => !prevState)}
        className={`${styles.menuButton} ${showNav ? styles.menuButtonOn : ""}`}
      >
        <div className={`${styles.line} ${styles.line1}`}></div>
        <div className={`${styles.line} ${styles.line2}`}></div>
        <div className={`${styles.line} ${styles.line3}`}></div>
      </button>
      <img className={styles.logoBig2} src="/logo.svg" alt="Logo Mimada" />
      <div data-visible={showNav} className={styles.navContainer}>
        <img className={styles.logoBig} src="/logo.svg" alt="Logo Mimada" />
        <img
          className={styles.logoSmall}
          src="/logo_small.svg"
          alt="Logo Mimada"
        />
        <div className="navbar">
          <Link href="/">
            <a className={styles.pocetna}>Početna</a>
          </Link>

          <Link href="">
            <a className={styles.proizvodi}>Proizvodi</a>
          </Link>
          <Link href="/cenovnik">
            <a className={styles.cenovnik}>Cenovnik</a>
          </Link>
          <Link href="/kontakt">
            <a className={styles.kontakt}>Kontakt</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
