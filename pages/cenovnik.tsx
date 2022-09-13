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

  return {
    props: {
      header,
      footer,
      cenovnik,
    },
  };
}

const Cenovnik: NextPage<PropsCenovnik> = (props) => {
  const pvc = props.cenovnik.data[0].attributes;
  const alu = props.cenovnik.data[1].attributes;
  const ulazna = props.cenovnik.data[2].attributes;
  const klizni = props.cenovnik.data[3].attributes;
  const roletne = props.cenovnik.data[4].attributes;
  const komarnici = props.cenovnik.data[5].attributes;

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
          <h1>MIMADA PLAST CENOVNIK</h1>
          <div></div>
          <p className={styles.uvod}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel
            leo odio. Maecenas dolor quam, convallis at dui ac, malesuada tempus
            quam. Nunc ultrices, ante et bibendum ultricies, est metus dapibus
            risus, sit amet posuere ex ipsum vitae orci. Aliquam sed eros semper
            velit lacinia viverra. Maecenas placerat, nisi at iaculis imperdiet,
            ante orci laoreet dui, at commodo elit lectus sed ipsum. Phasellus
            accumsan in nisl viverra porta. Pellentesque suscipit dictum nulla,
            at mattis ante malesuada eu. Vestibulum finibus, justo id sagittis
            sagittis, metus augue venenatis nunc, in consectetur metus elit sed
            turpis. Nam finibus, ex et iaculis commodo, velit diam maximus nunc,
            a accumsan leo sapien at ligula. Mauris venenatis, tortor vel
            maximus scelerisque, arcu tortor ullamcorper arcu, eget pharetra
            lorem odio eget nisi. Donec vitae felis lacus. Donec dignissim
            tincidunt erat. Cras a vehicula lorem, at vestibulum odio.
            Suspendisse potenti. Sed finibus vulputate nulla, ac semper diam
            vehicula in. Donec tincidunt nisl sit amet augue porta tristique.
            Nulla facilisi. Donec ornare porttitor lacus, vel varius nisi
            feugiat ut. Ut fermentum quam elit, et lobortis lectus ornare
            consectetur. Donec est odio, efficitur at erat at, sagittis blandit
            purus. Quisque vel odio diam. Suspendisse potenti. In tempor congue
            volutpat. Integer.
          </p>
        </div>
        <div>
          <h1>JEDNOKRILNI PROZORI</h1>
          <div className={styles.jednokrilniProzori}>
            <div className={styles.prices}>DIMENZIJA</div>
            <div className={styles.prices}>CENA</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>100 cm x 200 cm</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>100 x 200</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>100 x 200</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>100 x 200</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>100 x 200</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>100 x 200</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>100 x 200</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>100 x 200</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>100 x 200</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>100 x 200</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>100 x 200</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>100 x 200</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>100 x 200</div>
            <div className={styles.prices}>160€</div>
          </div>
        </div>
        <div>
          <h1>DVOKRILNI PROZORI</h1>
          <div className={styles.dvokrilniProzori}>
            <div className={styles.prices}>DIMENZIJA</div>
            <div className={styles.prices}>CENA</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>1400 cm x 800 cm</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>400 x 800</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>400 x 800</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>400 x 800</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>400 x 800</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>400 x 800</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>400 x 800</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>400 x 800</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>400 x 800</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>400 x 800</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>400 x 800</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>400 x 800</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>400 x 800</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>400 x 800</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>400 x 800</div>
            <div className={styles.prices}>280€</div>
          </div>
        </div>
        <div>
          <h1>JEDNOKRILNA BALKONSKA VRATA</h1>
          <div className={styles.jbv}>
            <div className={styles.prices}>DIMENZIJA</div>
            <div className={styles.prices}>CENA</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>300 cm x 1200 cm</div>
            <div className={styles.prices}>310€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>350 x 670</div>
            <div className={styles.prices}>310€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>350 x 670</div>
            <div className={styles.prices}>310€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>350 x 670</div>
            <div className={styles.prices}>310€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>350 x 670</div>
            <div className={styles.prices}>310€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>350 x 670</div>
            <div className={styles.prices}>310€</div>
          </div>
        </div>
        <div>
          <h1>DVOKRILNA BALKONSKA VRATA</h1>
          <div className={styles.dbv}>
            <div className={styles.prices}>DIMENZIJA</div>
            <div className={styles.prices}>CENA</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>1800 cm x 2700 cm</div>
            <div className={styles.prices}>390€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>800 x 700</div>
            <div className={styles.prices}>390€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>800 x 700</div>
            <div className={styles.prices}>390€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>800 x 700</div>
            <div className={styles.prices}>390€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>800 x 700</div>
            <div className={styles.prices}>390€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>800 x 700</div>
            <div className={styles.prices}>390€</div>
          </div>
        </div>
        <div>
          <h1>ROLETNE</h1>
          <div className={styles.roletne}>
            <div className={styles.prices}>DIMENZIJA</div>
            <div className={styles.prices}>CENA</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>1250 cm x 2450 cm</div>
            <div className={styles.prices}>570€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>1300 x 1000</div>
            <div className={styles.prices}>570€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>1300 x 1000</div>
            <div className={styles.prices}>570€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>1300 x 1000</div>
            <div className={styles.prices}>570€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>1300 x 1000</div>
            <div className={styles.prices}>570€</div>
          </div>
        </div>

        <div>
          <h1>KOMARNICI</h1>
          <div className={styles.komarnici}>
            <div className={styles.prices}>DIMENZIJA</div>
            <div className={styles.prices}>CENA</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>1250 cm x 2450 cm</div>
            <div className={styles.prices}>570€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>1300 x 1000</div>
            <div className={styles.prices}>570€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>1300 x 1000</div>
            <div className={styles.prices}>570€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>1300 x 1000</div>
            <div className={styles.prices}>570€</div>
          </div>
        </div>

        <div>
          <h1>ULAZNA VRATA</h1>
          <div className={styles.ulaznaVrata}>
            <div className={styles.prices}>DIMENZIJA</div>
            <div className={styles.prices}>CENA</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>1250 cm x 2450 cm</div>
            <div className={styles.prices}>570€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>1300 x 1000</div>
            <div className={styles.prices}>570€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>1300 x 1000</div>
            <div className={styles.prices}>570€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>1300 x 1000</div>
            <div className={styles.prices}>570€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>1300 x 1000</div>
            <div className={styles.prices}>570€</div>
            <div className={styles.line}></div>
            <div className={styles.prices}>1300 x 1000</div>
            <div className={styles.prices}>570€</div>
          </div>
        </div>
      </div>
      <Footer data={props.footer.data[0].attributes} />
    </div>
  );
};

export default Cenovnik;
