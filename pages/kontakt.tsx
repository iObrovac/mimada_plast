import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import HeaderContact from "../components/HeaderContact";
import HeaderNav from "../components/HeaderNav";
import { IKontakt } from "../intefaces/kontakt";
import styles from "../styles/Kontakt.module.scss";

const Kontakt: NextPage = () => {
  const [kontaktData, setKontaktData] = useState<IKontakt>();

  useEffect(() => {
    fetch("https://enigmatic-hollows-03847.herokuapp.com/api/kontakts")
      .then((response) => response.json())
      .then((data) => setKontaktData(data.data[0].attributes));
  }, []);

  console.log(kontaktData);

  return (
    <div className={styles.kontaktContainer}>
      <HeaderContact />
      <HeaderNav />
      <img
        className={styles.kontaktWindow}
        src="/window.svg"
        alt="Window Pic"
      />

      <div className={styles.contactForm}>
        <div className={styles.contactInfo}>
          <div>
            <div>
              <img src="/kontaktIme.svg" alt="Company Name Icon" />
            </div>
            <h4>{kontaktData?.Ime_firme}</h4>
          </div>

          <div>
            <div>
              <img src="/kontaktAdresa.svg" alt="Address Icon" />
            </div>
            <h4>{kontaktData?.Adresa}</h4>
          </div>

          <div>
            <div>
              <img src="/kontaktTelefon.svg" alt="Phone Icon" />
            </div>
            <h4>{kontaktData?.Telefon}</h4>
          </div>

          <div>
            <div>
              <img src="/kontaktSat.svg" alt="Clock Icon" />
            </div>
            <h4>{kontaktData?.radno_vreme}</h4>
          </div>

          <div>
            <div>
              <img src="/kontaktMail.svg" alt="Mail Icon" />
            </div>
            <h4>{kontaktData?.email}</h4>
          </div>

          <img
            className={styles.contactPic}
            src="/kontaktNoviSad.svg"
            alt="City Map"
          />
        </div>
        <div className={styles.contactInput}>
          <h1>KONTAKTIRAJTE NAS</h1>
          <input placeholder="Ime" type="text" className={styles.contactName} />
          <input
            placeholder="Email"
            type="email"
            className={styles.contactEmail}
          />
          <textarea placeholder="Poruka" name="" id="" />
          <button>Pošalji</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kontakt;
