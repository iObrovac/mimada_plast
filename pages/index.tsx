import type { NextPage } from "next";
import Footer from "../components/Footer";
import HeaderContact from "../components/HeaderContact";
import HeaderNav from "../components/HeaderNav";
import styles from "../styles/Random.module.scss";

const Home: NextPage = () => {
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
            <h4>Mimada VV Plast do.o. Novi Sad</h4>
          </div>

          <div>
            <div>
              <img src="/kontaktAdresa.svg" alt="Address Icon" />
            </div>
            <h4>Bulevar kralja Aleksandra 1, 21000 Novi Sad</h4>
          </div>

          <div>
            <div>
              <img src="/kontaktTelefon.svg" alt="Phone Icon" />
            </div>
            <h4>+381 61 123 45 67</h4>
          </div>

          <div>
            <div>
              <img src="/kontaktSat.svg" alt="Clock Icon" />
            </div>
            <h4>Pon - Pet: 07:00 - 16:00</h4>
          </div>

          <div>
            <div>
              <img src="/kontaktMail.svg" alt="Mail Icon" />
            </div>
            <h4>info@mimadaplast.rs</h4>
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

export default Home;
