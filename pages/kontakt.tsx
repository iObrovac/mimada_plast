import type { NextPage } from "next";
import { useState } from "react";
import Footer from "../components/Footer";
import HeaderContact from "../components/HeaderContact";
import HeaderNav from "../components/HeaderNav";
import { IKontakt, PropsKontakt } from "../intefaces/kontakt";
import styles from "../styles/Kontakt.module.scss";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import Head from "next/head";

export async function getServerSideProps() {
  const res = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/kontakts"
  );
  const kontaktInfo = await res.json();

  const res2 = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/navbars"
  );
  const header = await res2.json();

  const res3 = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/footers"
  );

  const footer = await res3.json();

  return {
    props: {
      kontaktInfo,
      header,
      footer,
    },
  };
}

function Map() {
  //   // const center = useMemo(
  //   //   () => ({ lat: 45.2987955266168, lng: 19.82615197616567 }),
  //   //   []
  //   // );

  //   // lat: 45.29982894123239, lng: 19.829251905796745

  //   // 45.298787, 19.826240

  return (
    <GoogleMap
      zoom={15}
      center={{ lat: 45.29942894123239, lng: 19.826251905796745 }}
      mapContainerClassName={styles.mapCont}
    >
      <MarkerF position={{ lat: 45.29880684676557, lng: 19.826302179878297 }} />
    </GoogleMap>
  );
}

const Kontakt: NextPage<PropsKontakt> = (props) => {
  const [kontaktData, setKontaktData] = useState<IKontakt>(
    props.kontaktInfo.data[0].attributes
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBrGNte0ffPin5LtBQNBeVZQvTAbWPHWdY",
  });

  // if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className={styles.kontaktContainer}>
      <Head>
        <title>
          MIMADA VV PLAST | Proizvodnja i Ugradnja PVC Stolarije Novi Sad
        </title>
        <meta
          name="description"
          content="Kontaktirajte nas i saop??tite nam va??e potrebe i planove a mi ??emo vam u ekspresnom roku dostaviti ponudu koju niko na tr??i??tu ne mo??e da nadma??i."
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <HeaderContact data={props.header.data[0].attributes} />
      <HeaderNav />
      <img
        className={styles.kontaktWindow}
        src="/window.svg"
        alt="Window Pic"
      />

      <div className={styles.contactForm}>
        <div className={styles.contactInfo}>
          <div className={styles.stavka1}>
            <div>
              <img src="/kontaktIme.svg" alt="Company Name Icon" />
            </div>
            <h4>{kontaktData?.Ime_firme}</h4>
          </div>

          <div className={styles.stavka2}>
            <div>
              <img src="/kontaktAdresa.svg" alt="Address Icon" />
            </div>
            <h4>{kontaktData?.Adresa}</h4>
          </div>

          <div className={styles.stavka3}>
            <div>
              <img src="/kontaktTelefon.svg" alt="Phone Icon" />
            </div>
            <h4>{kontaktData?.Telefon}</h4>
          </div>

          <div className={styles.stavka4}>
            <div>
              <img src="/kontaktSat.svg" alt="Clock Icon" />
            </div>
            <h4>{kontaktData?.radno_vreme}</h4>
          </div>

          <div className={styles.stavka5}>
            <div>
              <img src="/kontaktMail.svg" alt="Mail Icon" />
            </div>
            <h4>{kontaktData?.email}</h4>
          </div>

          {/* <div className={styles.mapCont}> */}
          {isLoaded ? <Map /> : <div>Loading...</div>}
          {/* </div> */}
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
          <button>Po??alji</button>
        </div>
      </div>
      <Footer data={props.footer.data[0].attributes} />
    </div>
  );
};

export default Kontakt;
