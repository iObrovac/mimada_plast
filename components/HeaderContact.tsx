import React from "react";
import type { NextPage } from "next";
import styles from "../styles/HeaderContact.module.scss";

const HeaderContact: NextPage = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.info}>
        <div className={styles.phone}>
          <img src="/phone_num.svg" alt="Phone Number" />
          +381 61 123 45 67
        </div>
        <div className={styles.mail}>
          <img src="/email_icon.svg" alt="Mail Icon" />
          prodaja@mimadaplast.rs
        </div>
        <div className={styles.hours}>
          <img src="/clock.svg" alt="" />
          Pon - Pet: 07:00 - 16:00
        </div>
      </div>
      <div className={styles.navigation}></div>
    </div>
  );
};

export default HeaderContact;
