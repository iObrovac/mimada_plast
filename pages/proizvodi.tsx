import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "../components/Footer";
import HeaderContact from "../components/HeaderContact";
import HeaderNav from "../components/HeaderNav";
import { IProData, IProizvodi } from "../intefaces/proizvodi";
import styles from "../styles/Proizvodi.module.scss";

export async function getStaticProps() {
  const res = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/navbars"
  );
  const header = await res.json();

  const res2 = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/footers"
  );

  const footer = await res2.json();

  const res3 = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/proizvodis"
  );

  const proizvodi = await res3.json();

  return {
    props: {
      header,
      footer,
      proizvodi,
    },
  };
}

const Proizvodi: NextPage<IProizvodi> = (props) => {
  const [proizvodi, setProizvodi] = useState<IProData>(
    props.proizvodi?.data[0].attributes
  );

  return (
    <div className={styles.container}>
      <HeaderContact data={props.header?.data[0].attributes} />
      <HeaderNav />

      <img className={styles.window} src="/window.svg" alt="Window Mimada" />
      <h1 className={styles.title}>Proizvodi</h1>

      <div className={styles.proizvodi}>
        <Link href="/pvcstolarija">
          <div className={styles.proizvod1}>
            <h3>{proizvodi.naslov_1}</h3>
            <p>{proizvodi.text_1}</p>
            <img className={styles.pro1} src="/proizvodi1.svg" alt="" />
          </div>
        </Link>

        <div className={styles.proizvod2}>
          <h3>{proizvodi.naslov_2}</h3>
          <p>{proizvodi.text_2}</p>
          <img className={styles.pro2} src="/proizvodi2.svg" alt="" />
        </div>

        <div className={styles.proizvod3}>
          <h3>{proizvodi.naslov_3}</h3>
          <p>{proizvodi.text_3}</p>
          <img className={styles.pro3} src="/proizvodi3.svg" alt="" />
        </div>

        <Link href="/roletne">
          <div className={styles.proizvod4}>
            <h3>{proizvodi.naslov_4}</h3>
            <p>{proizvodi.text_4}</p>
            <img className={styles.pro4} src="/proizvodi4.svg" alt="" />
          </div>
        </Link>
      </div>

      <Footer data={props.footer.data[0].attributes} />
    </div>
  );
};

export default Proizvodi;
