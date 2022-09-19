import { NextPage } from "next";
import React, { useState } from "react";
import Footer from "../components/Footer";
import HeaderContact from "../components/HeaderContact";
import HeaderNav from "../components/HeaderNav";
import { IRoletneData, IRoletneProps } from "../intefaces/roletne";
import styles from "../styles/Roletne.module.scss";

export async function getServerSideProps() {
  const res = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/roletnes"
  );
  const roletneInfo = await res.json();

  const res2 = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/navbars"
  );
  const header = await res2.json();

  const res3 = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/footers"
  );
  const zaglavljeTabeleRow = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/roletna-zaglavlje-tabele"
  );
  const redoviTabeleRaw = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/roletna-red-tabeles"
  );

  const footer = await res3.json();
  const redoviTabele = await redoviTabeleRaw.json();
  const zaglavljeTabele = await zaglavljeTabeleRow.json();

  return {
    props: {
      roletneInfo,
      header,
      footer,
      redoviTabele: redoviTabele.data,
      zaglavljeTabele: zaglavljeTabele.data,
    },
  };
}

const Roletne: NextPage<IRoletneProps> = ({
  roletneInfo,
  header,
  footer,
  redoviTabele,
  zaglavljeTabele,
}) => {
  const roletneData: IRoletneData = roletneInfo.data[0].attributes;

  return (
    <div className={styles.container}>
      <HeaderContact data={header.data[0].attributes} />
      <HeaderNav />

      <img className={styles.window} src="/window.svg" alt="Window Mimada" />
      <h1 className={styles.title}>{roletneData.Naslov}</h1>
      <div className={styles.details}>
        <div className={styles.section1}>
          <div className={styles.section1__text}>
            <div className={styles.section1__text__1}>
              <h3>{roletneData.Podnaslov_1}</h3>
              <p>{roletneData.text_1}</p>
              <p>{roletneData.text_2}</p>
            </div>
            <div className={styles.section1__text__2}>
              <h3>{roletneData.Podnaslov_2}</h3>
              <p>{roletneData.text_3}</p>
            </div>
          </div>
          <div className={styles.section1__pic}>
            <img className={styles.pic1} src="/roletne_1.svg" alt="" />
            <img className={styles.pic2} src="/roletne_2.svg" alt="" />
          </div>
        </div>
        <h2 className={styles.subtitle1}>{roletneData.Naslov_tabele}</h2>
        <div className={styles.slider}>
          <div className={styles.section2}>
            <div className={`${styles.tableText} ${styles.headerItem1}`}>
              {zaglavljeTabele.attributes.zaglavlje_naslov}
            </div>
            <div className={`${styles.tableText} ${styles.headerItem2}`}>
              {zaglavljeTabele.attributes.naslov_iznad_zaglavlja}
            </div>
            <div className={styles.tableText}>
              {zaglavljeTabele.attributes.zaglavlje_kolona3}
            </div>
            <div className={styles.tableText}>
              {zaglavljeTabele.attributes.zaglavlje_kolona4}
            </div>
            <div className={styles.tableText}>
              {zaglavljeTabele.attributes.zaglavlje_kolona5}
            </div>
            <div className={styles.tableText}>
              {zaglavljeTabele.attributes.zaglavlje_kolona6}
            </div>

            {redoviTabele?.map((red) => (
              <React.Fragment key={`red-${red.id}`}>
                {Object.entries(red.attributes)
                  .filter(
                    (attr): attr is [string, string] =>
                      attr[0] === "property" || attr[0].includes("kolona")
                  )
                  .map((stavka, stavkaIndex) => (
                    <div
                      key={`stavka-${red.id}-${stavkaIndex}`}
                      className={
                        stavka[0] === "property"
                          ? styles.firstColumn
                          : styles.column
                      }
                    >
                      {stavka[1]}
                    </div>
                  ))}
              </React.Fragment>
            ))}
          </div>

          <h4 className={styles.note}>{roletneData.fusnota_tabele}</h4>
        </div>
        <div className={styles.section3}>
          <div className={styles.left}>
            <h2>{roletneData.Naslov_mala_tabela_1}</h2>
            <p>{roletneData.Opis_mala_tabela_1}</p>
            <div className={styles.leftTable}>
              <div className={styles.leftTable1}>
                {roletneData.Malatabela1_field_1}
              </div>
              <div className={styles.leftTable2}>
                {roletneData.Malatabela1_field_2}
              </div>
              <div className={styles.leftTable3}>
                {roletneData.Malatabela1_field_3}
              </div>
              <div className={styles.leftTable4}>
                {roletneData.Malatabela1_field_4}
              </div>
              <div className={styles.leftTable5}>
                {roletneData.Malatabela1_field_5}
              </div>
              <div className={styles.leftTable6}>
                {roletneData.Malatabela1_field_6}
              </div>
              <div className={styles.leftTable7}>
                {roletneData.Malatabela1_field_7}
              </div>
              <div className={styles.leftTable8}>
                {roletneData.Malatabela1_field_8}
              </div>
              <div className={styles.leftTable9}>
                {roletneData.Malatabela1_field_9}
              </div>
              <div className={styles.leftTable10}>
                {roletneData.Malatabela1_field_10}
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <h2>{roletneData.Naslov_mala_tabela_2}</h2>
            <p>{roletneData.Opis_mala_tabela_2}</p>
            <div className={styles.rightTable}>
              <div className={styles.rightTable1}>
                {roletneData.malatabela2_field_1}
              </div>
              <div className={styles.rightTable2}>
                {roletneData.malatabela2_field_2}
              </div>
              <div className={styles.rightTable3}>
                {roletneData.malatabela2_field_3}
              </div>
              <div className={styles.rightTable4}>
                {roletneData.malatabela2_field_4}
              </div>
              <div className={styles.rightTable5}>
                {roletneData.malatabela2_field_5}
              </div>
              <div className={styles.rightTable6}>
                {roletneData.malatabela2_field_6}
              </div>
              <div className={styles.rightTable7}>
                {roletneData.malatabela2_field_7}
              </div>
              <div className={styles.rightTable8}>
                {roletneData.malatabela2_field_8}
              </div>
              <div className={styles.rightTable9}>
                {roletneData.malatabela2_field_9}
              </div>
              <div className={styles.rightTable10}>
                {roletneData.malatabela2_field_10}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer data={footer.data[0].attributes} />
    </div>
  );
};

export default Roletne;
