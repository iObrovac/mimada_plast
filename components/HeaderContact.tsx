import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/HeaderContact.module.scss";
import { IContactData, IHeaderData } from "../intefaces/header";

const HeaderContact: NextPage<IHeaderData> = (props) => {
  const [contactData, setContactData] = useState<IContactData>(props.data);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.info}>
        <div className={styles.phone}>
          <img src="/phone_num.svg" alt="Phone Number" />
          {contactData.Broj_telefona}
        </div>
        <div className={styles.mail}>
          <img src="/email_icon.svg" alt="Mail Icon" />
          {contactData.E_mail}
        </div>
        <div className={styles.hours}>
          <img src="/clock.svg" alt="" />
          {contactData.Radno_vreme}
        </div>
      </div>
    </div>
  );
};

export default HeaderContact;
