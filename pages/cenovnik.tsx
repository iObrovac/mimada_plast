import type { NextPage } from "next";
import Head from "next/head";
import { Fragment, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import HeaderContact from "../components/HeaderContact";
import HeaderNav from "../components/HeaderNav";
import { ICenovnikSingle, PropsCenovnik } from "../intefaces/cenovnik";
import styles from "../styles/Cenovnik.module.scss";

export async function getServerSideProps() {
  const res = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/navbars"
  );
  const header = await res.json();

  const res2 = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/footers"
  );

  const footer = await res2.json();

  const res3 = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/cenovniks"
  );

  const cenovnik = await res3.json();

  const res4 = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/cenovnik-teksts"
  );

  const cenovnikTekst = await res4.json();

  return {
    props: {
      header,
      footer,
      cenovnik,
      cenovnikTekst,
    },
  };
}

interface RedTabele {
  dimenzija: string;
  cena: string;
}

function createTableArray(singleCenovnik: ICenovnikSingle): RedTabele[] {
  let nizTabele: RedTabele[] = [];

  const filtriraniUnosi = Object.entries(singleCenovnik).filter(
    (niz) => (niz[0].includes("cena") || niz[0].includes("dimenzija")) && niz[1]
  );
  const filtriraniUnosiObj = Object.fromEntries(filtriraniUnosi);

  for (let i = 0; i < filtriraniUnosi.length / 2; i++) {
    const redTabele: RedTabele = {
      dimenzija: filtriraniUnosiObj[`dimenzija${i + 1}`],
      cena: filtriraniUnosiObj[`cena${i + 1}`],
    };
    nizTabele.push(redTabele);
  }

  return nizTabele;
}

interface TableContentProps {
  tableEntry: RedTabele[];
}

const TableContent = ({ tableEntry }: TableContentProps) => (
  <>
    {tableEntry.map((tableRow, tableRowIndex) => (
      <Fragment key={`table-row-${tableRowIndex}`}>
        <div className={styles.prices}>{tableRow.dimenzija}</div>
        <div className={styles.prices}>{tableRow.cena}</div>
        {tableRowIndex < tableEntry.length - 1 && (
          <div className={styles.line}></div>
        )}
      </Fragment>
    ))}
  </>
);

const Cenovnik: NextPage<PropsCenovnik> = (props) => {
  const jkp = props.cenovnik.data[2].attributes;
  const dkp = props.cenovnik.data[1].attributes;
  const jbv = props.cenovnik.data[3].attributes;
  const dbv = props.cenovnik.data[4].attributes;
  const rol = props.cenovnik.data[5].attributes;
  const kom = props.cenovnik.data[6].attributes;
  const uv = props.cenovnik.data[0].attributes;
  const mimadaTekst = props.cenovnikTekst.data[0].attributes;

  const jednokrilniProzori = createTableArray(jkp);
  const dvokrilniProzori = createTableArray(dkp);
  const jednokrilnaBalkonskaVrata = createTableArray(jbv);
  const dvorilnaBalkonskaVrata = createTableArray(dbv);
  const roletne = createTableArray(rol);
  const komarnici = createTableArray(kom);
  const ulaznaVrata = createTableArray(uv);

  return (
    <div className={styles.cenovnikContainer}>
      <Head>
        <title>MIMADA VV PLAST | PVC Stolarija Novi Sad Cene</title>
        <meta
          name="description"
          content="Najjeftiniji pvc prozori, pvc vrata, alu vrata, roletne, komarnici, i klizni sistemi u Novom Sadu. Proizvodnja po receptu proverenih nemačkih majstora."
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <HeaderContact data={props.header.data[0].attributes} />
      <HeaderNav />
      <img
        className={styles.cenovnikLogo}
        src="/window.svg"
        alt="Company Logo"
      />
      <div className={styles.cenovnikSlider}>
        <div>
          <h1>{mimadaTekst.Naslov}</h1>
          <div></div>
          <p className={styles.uvod}>{mimadaTekst.Tekst}</p>
        </div>
        <div>
          <h1>{jkp.naslovTabele}</h1>
          <div className={styles.jednokrilniProzori}>
            <div className={styles.prices}>{jkp.naslovKolona1}</div>
            <div className={styles.prices}>{jkp.naslovKolona2}</div>
            <div className={styles.line}></div>
            <TableContent tableEntry={jednokrilniProzori} />
          </div>
        </div>
        <div>
          <h1>{dkp.naslovTabele}</h1>
          <div className={styles.dvokrilniProzori}>
            <div className={styles.prices}>{dkp.naslovKolona1}</div>
            <div className={styles.prices}>{dkp.naslovKolona2}</div>
            <div className={styles.line}></div>

            <TableContent tableEntry={dvokrilniProzori} />
          </div>
        </div>
        <div>
          <h1>{jbv.naslovTabele}</h1>
          <div className={styles.jbv}>
            <div className={styles.prices}>{jbv.naslovKolona1}</div>
            <div className={styles.prices}>{jbv.naslovKolona2}</div>
            <div className={styles.line}></div>
            <TableContent tableEntry={jednokrilnaBalkonskaVrata} />
          </div>
        </div>
        <div>
          <h1>{dbv.naslovTabele}</h1>
          <div className={styles.dbv}>
            <div className={styles.prices}>{dbv.naslovKolona1}</div>
            <div className={styles.prices}>{dbv.naslovKolona2}</div>
            <div className={styles.line}></div>
            <TableContent tableEntry={dvorilnaBalkonskaVrata} />
          </div>
        </div>
        <div>
          <h1>{rol.naslovTabele}</h1>
          <div className={styles.roletne}>
            <div className={styles.prices}>{rol.naslovKolona1}</div>
            <div className={styles.prices}>{rol.naslovKolona2}</div>
            <div className={styles.line}></div>
            <TableContent tableEntry={roletne} />
          </div>
        </div>

        <div>
          <h1>{kom.naslovTabele}</h1>
          <div className={styles.komarnici}>
            <div className={styles.prices}>{kom.naslovKolona1}</div>
            <div className={styles.prices}>{kom.naslovKolona2}</div>
            <div className={styles.line}></div>
            <TableContent tableEntry={komarnici} />
          </div>
        </div>

        <div>
          <h1>{uv.naslovTabele}</h1>
          <div className={styles.ulaznaVrata}>
            <div className={styles.prices}>{uv.naslovKolona1}</div>
            <div className={styles.prices}>{uv.naslovKolona2}</div>
            <div className={styles.line}></div>
            <TableContent tableEntry={ulaznaVrata} />
          </div>
        </div>
      </div>
      <Footer data={props.footer.data[0].attributes} />
    </div>
  );
};

export default Cenovnik;
