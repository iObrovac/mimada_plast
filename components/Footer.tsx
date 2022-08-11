import type { NextPage } from "next";
import styles from "../styles/Footer.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IFooterData } from "../intefaces/footer";

const Footer: NextPage = () => {
  const [footerData, setFooterData] = useState<IFooterData>();

  useEffect(() => {
    fetch("https://enigmatic-hollows-03847.herokuapp.com/api/footers")
      .then((response) => response.json())
      .then((data) => setFooterData(data.data[0].attributes));
  }, []);

  return (
    <div className={styles.footerCont}>
      <div className={styles.footerPic}>
        <img src="/Logo_Big.svg" alt="Mimada Logo" />
      </div>
      <div className={styles.footer1}>
        <Link href="/cenovnik">
          <h4>Cenovnik</h4>
        </Link>
        <Link href="/kontakt">
          <h4>Kontakt</h4>
        </Link>
        <h4>Uslovi korišćenja</h4>
        <h4>Politika privatnosti</h4>
      </div>
      <div className={styles.footer2}>
        <h4>Poslovno Ime</h4>
        <h5>{footerData?.poslovno_ime}</h5>
        <h4>Matični Broj</h4>
        <h5>{footerData?.poslovno_ime}</h5>
        <h4>PIB</h4>
        <h5>{footerData?.PIB}</h5>
        <h4>Radno vreme</h4>
        <h5>{footerData?.Radno_vreme}</h5>
      </div>
      <div className={styles.footer3}>
        <h4>Adresa</h4>
        <h5>{footerData?.Adresa}</h5>
        <h4>Telefon</h4>
        <h5>{footerData?.Telefon}</h5>
        <h4>E-pošta</h4>
        <h5>{footerData?.email}</h5>
      </div>
    </div>
  );
};

export default Footer;
