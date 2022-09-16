import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import HeaderContact from "../components/HeaderContact";
import HeaderNav from "../components/HeaderNav";
import { PropsCenovnik } from "../intefaces/cenovnik";
import styles from "../styles/Cenovnik.module.scss";

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

const Cenovnik: NextPage<PropsCenovnik> = (props) => {
  const jkp = props.cenovnik.data[2].attributes;
  const dkp = props.cenovnik.data[1].attributes;
  const jbv = props.cenovnik.data[3].attributes;
  const dbv = props.cenovnik.data[4].attributes;
  const rol = props.cenovnik.data[5].attributes;
  const kom = props.cenovnik.data[6].attributes;
  const uv = props.cenovnik.data[0].attributes;
  const mimadaTekst = props.cenovnikTekst.data[0].attributes;

  return (
    <div className={styles.cenovnikContainer}>
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
            <div className={styles.prices}>{jkp.dimenzija1}</div>
            <div className={styles.prices}>{jkp.cena1}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{jkp.dimenzija2}</div>
            <div className={styles.prices}>{jkp.cena2}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{jkp.dimenzija3}</div>
            <div className={styles.prices}>{jkp.cena3}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{jkp.dimenzija4}</div>
            <div className={styles.prices}>{jkp.cena4}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{jkp.dimenzija5}</div>
            <div className={styles.prices}>{jkp.cena5}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{jkp.dimenzija6}</div>
            <div className={styles.prices}>{jkp.cena6}</div>
            {/* <div className={styles.line}></div>
            <div className={styles.prices}>{jkp.dimenzija7}</div>
            <div className={styles.prices}>{jkp.cena7}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{jkp.dimenzija8}</div>
            <div className={styles.prices}>{jkp.cena8}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{jkp.dimenzija9}</div>
            <div className={styles.prices}>{jkp.cena9}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{jkp.dimenzija10}</div>
            <div className={styles.prices}>{jkp.cena10}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{jkp.dimenzija11}</div>
            <div className={styles.prices}>{jkp.cena11}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{jkp.dimenzija12}</div>
            <div className={styles.prices}>{jkp.cena12}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{jkp.dimenzija13}</div>
            <div className={styles.prices}>{jkp.cena13}</div> */}
          </div>
        </div>
        <div>
          <h1>{dkp.naslovTabele}</h1>
          <div className={styles.dvokrilniProzori}>
            <div className={styles.prices}>{dkp.naslovKolona1}</div>
            <div className={styles.prices}>{dkp.naslovKolona2}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dkp.dimenzija1}</div>
            <div className={styles.prices}>{dkp.cena1}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dkp.dimenzija2}</div>
            <div className={styles.prices}>{dkp.cena2}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dkp.dimenzija3}</div>
            <div className={styles.prices}>{dkp.cena3}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dkp.dimenzija4}</div>
            <div className={styles.prices}>{dkp.cena4}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dkp.dimenzija5}</div>
            <div className={styles.prices}>{dkp.cena5}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dkp.dimenzija6}</div>
            <div className={styles.prices}>{dkp.cena6}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dkp.dimenzija7}</div>
            <div className={styles.prices}>{dkp.cena7}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dkp.dimenzija8}</div>
            <div className={styles.prices}>{dkp.cena8}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dkp.dimenzija9}</div>
            <div className={styles.prices}>{dkp.cena9}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dkp.dimenzija10}</div>
            <div className={styles.prices}>{dkp.cena10}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dkp.dimenzija11}</div>
            <div className={styles.prices}>{dkp.cena11}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dkp.dimenzija12}</div>
            <div className={styles.prices}>{dkp.cena12}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dkp.dimenzija13}</div>
            <div className={styles.prices}>{dkp.cena13}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dkp.dimenzija14}</div>
            <div className={styles.prices}>{dkp.cena14}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dkp.dimenzija15}</div>
            <div className={styles.prices}>{dkp.cena15}</div>
          </div>
        </div>
        <div>
          <h1>{jbv.naslovTabele}</h1>
          <div className={styles.jbv}>
            <div className={styles.prices}>{jbv.naslovKolona1}</div>
            <div className={styles.prices}>{jbv.naslovKolona2}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{jbv.dimenzija1}</div>
            <div className={styles.prices}>{jbv.cena1}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{jbv.dimenzija2}</div>
            <div className={styles.prices}>{jbv.cena2}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{jbv.dimenzija3}</div>
            <div className={styles.prices}>{jbv.cena3}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{jbv.dimenzija4}</div>
            <div className={styles.prices}>{jbv.cena4}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{jbv.dimenzija5}</div>
            <div className={styles.prices}>{jbv.cena5}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{jbv.dimenzija6}</div>
            <div className={styles.prices}>{jbv.cena6}</div>
          </div>
        </div>
        <div>
          <h1>{dbv.naslovTabele}</h1>
          <div className={styles.dbv}>
            <div className={styles.prices}>{dbv.naslovKolona1}</div>
            <div className={styles.prices}>{dbv.naslovKolona2}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dbv.dimenzija1}</div>
            <div className={styles.prices}>{dbv.cena1}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dbv.dimenzija2}</div>
            <div className={styles.prices}>{dbv.cena2}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dbv.dimenzija3}</div>
            <div className={styles.prices}>{dbv.cena3}</div>
            {/* <div className={styles.line}></div>
            <div className={styles.prices}>{dbv.dimenzija4}</div>
            <div className={styles.prices}>{dbv.cena4}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dbv.dimenzija5}</div>
            <div className={styles.prices}>{dbv.cena5}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{dbv.dimenzija6}</div>
            <div className={styles.prices}>{dbv.cena6}</div> */}
          </div>
        </div>
        <div>
          <h1>{rol.naslovTabele}</h1>
          <div className={styles.roletne}>
            <div className={styles.prices}>{rol.naslovKolona1}</div>
            <div className={styles.prices}>{rol.naslovKolona2}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{rol.dimenzija1}</div>
            <div className={styles.prices}>{rol.cena1}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{rol.dimenzija2}</div>
            <div className={styles.prices}>{rol.cena2}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{rol.dimenzija3}</div>
            <div className={styles.prices}>{rol.cena3}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{rol.dimenzija4}</div>
            <div className={styles.prices}>{rol.cena4}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{rol.dimenzija5}</div>
            <div className={styles.prices}>{rol.cena5}</div>
          </div>
        </div>

        <div>
          <h1>{kom.naslovTabele}</h1>
          <div className={styles.komarnici}>
            <div className={styles.prices}>{kom.naslovKolona1}</div>
            <div className={styles.prices}>{kom.naslovKolona2}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{kom.dimenzija1}</div>
            <div className={styles.prices}>{kom.cena1}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{kom.dimenzija2}</div>
            <div className={styles.prices}>{kom.cena2}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{kom.dimenzija3}</div>
            <div className={styles.prices}>{kom.cena3}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{kom.dimenzija4}</div>
            <div className={styles.prices}>{kom.cena4}</div>
          </div>
        </div>

        <div>
          <h1>{uv.naslovTabele}</h1>
          <div className={styles.ulaznaVrata}>
            <div className={styles.prices}>{uv.naslovKolona1}</div>
            <div className={styles.prices}>{uv.naslovKolona2}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{uv.dimenzija1}</div>
            <div className={styles.prices}>{uv.cena1}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{uv.dimenzija2}</div>
            <div className={styles.prices}>{uv.cena2}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{uv.dimenzija3}</div>
            <div className={styles.prices}>{uv.cena3}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{uv.dimenzija4}</div>
            <div className={styles.prices}>{uv.cena4}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{uv.dimenzija5}</div>
            <div className={styles.prices}>{uv.cena5}</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>{uv.dimenzija6}</div>
            <div className={styles.prices}>{uv.cena6}</div>
          </div>
        </div>
      </div>
      <Footer data={props.footer.data[0].attributes} />
    </div>
  );
};

export default Cenovnik;
