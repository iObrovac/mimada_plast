import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Footer from "../components/Footer";
import HeaderContact from "../components/HeaderContact";
import HeaderNav from "../components/HeaderNav";
import { IPVCProps } from "../intefaces/pvcstolarija";
import styles from "../styles/Pvcstolarija.module.scss";

export async function getServerSideProps() {
  const res = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/pvcstolarijas"
  );
  const pvcInfo = await res.json();

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
      pvcInfo,
      header,
      footer,
    },
  };
}

const Pvcstolarija: NextPage<IPVCProps> = (props) => {
  const [pvc, setPvc] = useState(props.pvcInfo.data[0].attributes);

  return (
    <div className={styles.container}>
      <Head>
        <title>MIMADA VV PLAST | PVC Prozori PVC Vrata Novi Sad</title>
        <meta
          name="description"
          content="Proizvodnja i ugradnja stolarije vrhunskog kvaliteta u Novom Sadu i Srbiji. PVC Stolarija, ALU Stolarija, Ulazna vrata, Klizni Sistemi, Roletne, Komarnici."
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <HeaderContact data={props.header.data[0].attributes} />
      <HeaderNav />

      <img className={styles.window} src="/window.svg" alt="Window Mimada" />
      <h1 className={styles.title}>{pvc.Naslov}</h1>

      <div className={styles.details}>
        <div className={styles.section1}>
          <h2>{pvc.Podnaslov_1}</h2>
          <p>{pvc.text_1}</p>
        </div>

        <div className={styles.section2}>
          <h2>{pvc.Podnaslov_2}</h2>
          <div className={styles.section2__container}>
            <div>
              <img src="/pvc_1.svg" alt="" />
              <h4>{pvc.opcija_1_naslov}</h4>
              <p>{pvc.opcija_1_text}</p>
            </div>
            <div>
              <img src="/pvc_2.svg" alt="" />
              <h4>{pvc.opcija2_naslov}</h4>
              <p>{pvc.opcija2_text}</p>
            </div>
            <div>
              <img src="/pvc_3.svg" alt="" />
              <h4>{pvc.opcija3_naslov}</h4>
              <p>{pvc.opcija3_text}</p>
            </div>
          </div>
        </div>
        <div className={styles.section3}>
          <div>
            <img src="/pvc_presek.svg" alt="" />
            <img className={styles.pic1} src="/pvc_num1.svg" alt="" />
            <img className={styles.pic2} src="/pvc_num2.svg" alt="" />
            <img className={styles.pic3} src="/pvc_num3.svg" alt="" />
            <img className={styles.pic4} src="/pvc_num4.svg" alt="" />
            <img className={styles.pic5} src="/pvc_num5.svg" alt="" />
            <img className={styles.pic6} src="/pvc_num6.svg" alt="" />
          </div>
          <div className={styles.section3__text}>
            <h3>{pvc.podnaslov3}</h3>
            <p>{pvc.text_2}</p>
          </div>
        </div>

        <div className={styles.section4}>
          <div>
            <div>
              <img src="/pvc_pic1.svg" alt="" />
              <img className={styles.smallNum} src="/pvc_num1.svg" alt="" />
            </div>
            <div>
              <h3>{pvc.slika1_naslov}</h3>
              <p>{pvc.slika1_text}</p>
            </div>
          </div>

          <div>
            <div>
              <img src="/pvc_pic2.svg" alt="" />
              <img className={styles.smallNum} src="/pvc_num2.svg" alt="" />
            </div>
            <div>
              <h3>{pvc.slika2_naslov}</h3>
              <p>{pvc.slika2_text}</p>
            </div>
          </div>

          <div>
            <div>
              <img src="/pvc_pic3.svg" alt="" />
              <img className={styles.smallNum} src="/pvc_num3.svg" alt="" />
            </div>
            <div>
              <h3>{pvc.slika3_naslov}</h3>
              <p>{pvc.slika3_text}</p>
            </div>
          </div>

          <div>
            <div>
              <img src="/pvc_pic4.svg" alt="" />
              <img className={styles.smallNum} src="/pvc_num4.svg" alt="" />
            </div>
            <div>
              <h3>{pvc.slika4_naslov}</h3>
              <p>{pvc.slika4_text}</p>
            </div>
          </div>

          <div>
            <div>
              <img src="/pvc_pic5.svg" alt="" />
              <img className={styles.smallNum} src="/pvc_num5.svg" alt="" />
            </div>
            <div>
              <h3>{pvc.slika5_naslov}</h3>
              <p>{pvc.slika5_text}</p>
            </div>
          </div>

          <div>
            <div>
              <img src="/pvc_pic6.svg" alt="" />
              <img className={styles.smallNum} src="/pvc_num6.svg" alt="" />
            </div>
            <div>
              <h3>{pvc.slika6_naslov}</h3>
              <p>{pvc.slika6_text}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer data={props.footer.data[0].attributes} />
    </div>
  );
};

export default Pvcstolarija;
