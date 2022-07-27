import type { NextPage } from "next";
import styles from "../styles/Footer.module.scss";

const Footer: NextPage = () => {
  return (
    <div className={styles.footerCont}>
      <div className={styles.footerPic}>
        <img src="/Logo_Big.svg" alt="Mimada Logo" />
      </div>
      <div className={styles.footer1}>
        <h4>Cenovnik</h4>
        <h4>Kontakt</h4>
        <h4>Uslovi korišćenja</h4>
        <h4>Politika privatnosti</h4>
      </div>
      <div className={styles.footer2}>
        <h4>Poslovno Ime</h4>
        <h5>Mimada VV Plast d.o.o. Novi Sad</h5>
        <h4>Matični Broj</h4>
        <h5>012345678</h5>
        <h4>PIB</h4>
        <h5>012345678</h5>
        <h4>Radno vreme</h4>
        <h5>Pon - Pet: 07:00 - 16:00</h5>
      </div>
      <div className={styles.footer3}>
        <h4>Adresa</h4>
        <h5>Bulevar kralja Aleksandra 1, 21000 Novi Sad</h5>
        <h4>Telefon</h4>
        <h5>+381 61 123 45 67</h5>
        <h4>E-pošta</h4>
        <h5>info@mimadaplast.rs</h5>
      </div>
    </div>
  );
};

export default Footer;
