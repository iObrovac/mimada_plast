import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import HeaderContact from "../components/HeaderContact";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import Link from "next/link";
import { IHomepage, Props } from "../intefaces/homepage";
import { useState } from "react";

export async function getServerSideProps() {
  const res = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/homepages"
  );
  const headerInfo = await res.json();

  const res2 = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/navbars"
  );
  const headerFirst = await res2.json();

  const res3 = await fetch(
    "https://enigmatic-hollows-03847.herokuapp.com/api/footers"
  );

  const footer = await res3.json();

  return {
    props: {
      headerInfo,
      headerFirst,
      footer,
    },
  };
}

const Home: NextPage<Props> = (props) => {
  const [homeData, setHomeData] = useState<IHomepage>(
    props.headerInfo.data[0].attributes
  );

  return (
    <div className={styles.homepageContainer}>
      <Head>
        <title>MIMADA VV PLAST | PVC Stolarija Novi Sad</title>
        <meta
          name="description"
          content="Vrhunski PVC i ALU profili proizvedeni po proverenom nemačkom receptu. Brza i čista ugradnja po povoljnim cenama na teritoriji Novog Sada i cele Srbije."
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <HeaderContact data={props.headerFirst.data[0].attributes} />
      <HeaderNav />
      <img
        className={styles.homeWindow}
        src="/window.svg"
        alt="Window Mimada"
      />

      <h1 className={styles.mainTitle}>{homeData?.Naslov}</h1>
      <Link href="/kontakt">
        <button className={styles.konsultacije}>{homeData?.Button}</button>
      </Link>
      <div className={styles.services}>
        <h2 className={styles.servicesTitle}>{homeData?.Podnaslov}</h2>
        <div className={styles.serviceFirst}>
          <div className={styles.firstLeft}>
            <div className={styles.firstLeft1}>
              <div className={styles.firstLeft1_number}>1</div>
              <div className={styles.firstLeft1_text}>
                <h3>{homeData?.Opcija1_naslov}</h3>
                <p>{homeData?.Opcija1_tekst}</p>
              </div>
            </div>
            <div className={styles.firstLeft2}>
              <div className={styles.firstLeft2_number}>2</div>
              <div className={styles.firstLeft2_text}>
                <h3>{homeData?.Opcija2_naslov}</h3>
                <p>{homeData?.Opcija2_tekst}</p>
              </div>
            </div>
            <div className={styles.firstLeft3}>
              <div className={styles.firstLeft3_number}>3</div>
              <div className={styles.firstLeft3_text}>
                <h3>{homeData?.Opcija3_naslov}</h3>
                <p>{homeData?.Opcija3_tekst}</p>
              </div>
            </div>
          </div>
          <div className={styles.firstRight}>
            <img
              className={styles.windowWhite}
              src="/window_white.svg"
              alt="White Window Open"
            />
            <img
              className={styles.number1}
              src="/number1.svg"
              alt="Number One"
            />
            <img
              className={styles.number2}
              src="/number2.svg"
              alt="Number Two"
            />
            <img
              className={styles.number3}
              src="/number3.svg"
              alt="Number Three"
            />
          </div>
        </div>
        <h2 className={styles.subtitleMimada}>{homeData?.Podnaslov2}</h2>
        <img
          className={styles.dottedLine}
          src="/wave.svg"
          alt="Dotted Curved Line"
        />
        <div className={styles.serviceSecond}>
          <div className={styles.pvc}>
            <img src="/pvc.svg" alt="" />
            <h4>{homeData?.Proizvod1_naslov}</h4>
            <p>{homeData?.Proizvod1_opis}</p>
          </div>
          <div className={styles.alu}>
            <img src="/alu.svg" alt="" />
            <h4>{homeData?.Proizvod2_naslov}</h4>
            <p>{homeData?.Proizvod2_opis}</p>
          </div>
          <div className={styles.ulazna}>
            <img src="/ulazna.svg" alt="" />
            <h4>{homeData?.Proizvod3_naslov}</h4>
            <p>{homeData?.Proizvod3_opis}</p>
          </div>
          <div className={styles.klizni}>
            <img src="/klizni.svg" alt="" />
            <h4>{homeData?.Proizvod4_naslov}</h4>
            <p>{homeData?.Proizvod4_opis}</p>
          </div>
          <div className={styles.roletne}>
            <img src="/roletne.svg" alt="" />
            <h4>{homeData?.Proizvod5_naslov}</h4>
            <p>{homeData?.Proizvod5_opis}</p>
          </div>
          <div className={styles.komarnici}>
            <img src="/komarnici.svg" alt="" />
            <h4>{homeData?.Proizvod6_naslov}</h4>
            <p>{homeData?.Proizvod6_opis}</p>
          </div>
        </div>
      </div>

      <h1 className={styles.titleSecond}>{homeData?.Naslov2}</h1>
      <div className={styles.fourSquares}>
        <div className={styles.squareSlider}>
          <img src="/wave_num2.svg" alt="Dotted Line Two" />

          <input
            type="radio"
            className={styles.radio}
            name={"images"}
            id={styles.radio1}
            defaultChecked
          />
          <input
            type="radio"
            className={styles.radio}
            name={"images"}
            id={styles.radio2}
          />
          <input
            type="radio"
            className={styles.radio}
            name={"images"}
            id={styles.radio3}
          />
          <input
            type="radio"
            className={styles.radio}
            name={"images"}
            id={styles.radio4}
          />

          <div className={styles.square1}>
            <img src="/01.svg" alt="Number One" />
            <h4>{homeData?.Slider1_naslov}</h4>
            <p>{homeData?.Slider1_opis}</p>
          </div>
          <div className={styles.square2}>
            <img src="/02.svg" alt="Number Two" />
            <h4>{homeData?.Slider2_naslov}</h4>
            <p>{homeData?.Slider2_opis}</p>
          </div>
          <div className={styles.square3}>
            <img src="/03.svg" alt="Number Three" />
            <h4>{homeData?.Slider3_naslov}</h4>
            <p>{homeData?.Slider3_opis}</p>
          </div>
          <div className={styles.square4}>
            <img src="/04.svg" alt="Number Four" />
            <h4>{homeData?.Slider4_naslov}</h4>
            <p>{homeData?.Slider4_opis}</p>
          </div>

          <section className={styles.dots}>
            <label htmlFor={styles.radio1} id={styles.label1}></label>
            <label htmlFor={styles.radio2} id={styles.label2}></label>
            <label htmlFor={styles.radio3} id={styles.label3}></label>
            <label htmlFor={styles.radio4} id={styles.label4}></label>
          </section>
        </div>
      </div>
      <div className={styles.sponsors}>
        <h1>PARTNERI</h1>
        <div className={styles.sponsorsContainer}>
          <div className={styles.sponsor1}>
            <img src="/trocal.svg" alt="Trocal Logo" />
            <p>{homeData?.Partner1_opis}</p>
          </div>
          <div className={styles.sponsor2}>
            <img src="/kbe.svg" alt="KBE Logo" />
            <p>{homeData?.Partner2_opis}</p>
          </div>
          <div className={styles.sponsor3}>
            <img src="/winkhaus.svg" alt="Winkhaus Logo" />
            <p>{homeData?.Partner3_opis}</p>
          </div>
          <div className={styles.sponsor4}>
            <img src="wurthwuth.svg" alt="Wurth Logo" />
            <p>{homeData?.Partner4_opis}</p>
          </div>
          <div className={styles.sponsor5}>
            <img src="/kommer.svg" alt="Winkhaus Logo" />
            <p>{homeData?.Partner5_opis}</p>
          </div>
        </div>
      </div>
      <Footer data={props.footer.data[0].attributes} />
    </div>
  );
};

export default Home;
