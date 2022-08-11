import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/HeaderContact.module.scss";
import { fetcher } from "../lib/api";
import { IContactData } from "../intefaces/header";

const HeaderContact: NextPage = (res) => {
  const [contactData, setContactData] = useState<IContactData>();

  useEffect(() => {
    fetch("https://enigmatic-hollows-03847.herokuapp.com/api/navbars")
      .then((response) => response.json())
      .then((data) => setContactData(data.data[0].attributes));
  }, []);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.info}>
        <div className={styles.phone}>
          <img src="/phone_num.svg" alt="Phone Number" />
          {contactData?.Broj_telefona}
        </div>
        <div className={styles.mail}>
          <img src="/email_icon.svg" alt="Mail Icon" />
          {contactData?.E_mail}
        </div>
        <div className={styles.hours}>
          <img src="/clock.svg" alt="" />
          {contactData?.Radno_vreme}
        </div>
      </div>
      <div className={styles.navigation}></div>
    </div>
  );
};

export default HeaderContact;
