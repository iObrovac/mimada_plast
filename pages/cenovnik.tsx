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

  return {
    props: {
      header,
      footer,
    },
  };
}

const Cenovnik: NextPage<PropsCenovnik> = (props) => {
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = slider.current;
    let isDown = false;
    let startX: number, scrollLeft: number;

    const mouseDown = (e: MouseEvent) => {
      if (element) {
        isDown = true;
        startX = e.pageX - element.offsetLeft;
        scrollLeft = element.scrollLeft;
      }
    };

    const mouseLeave = (e: MouseEvent) => {
      if (element) {
        isDown = false;
      }
    };

    const mouseUp = (e: MouseEvent) => {
      if (element) {
        isDown = false;
      }
    };

    const mouseMove = (e: MouseEvent) => {
      if (element) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - element.offsetLeft;
        const walk = (x - startX) * 3;
        element.scrollLeft = scrollLeft - walk;
      }
    };
    if (element) {
      element.addEventListener("mousedown", mouseDown);
      element.addEventListener("mouseleave", mouseLeave);
      element.addEventListener("mouseup", mouseUp);
      element.addEventListener("mousemove", mouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousedown", mouseDown);
        element.removeEventListener("mouseleave", mouseLeave);
        element.removeEventListener("mouseup", mouseUp);
        element.removeEventListener("mousemove", mouseMove);
      }
    };
  }, []);

  return (
    <div className={styles.cenovnikContainer}>
      <HeaderContact data={props.header.data[0].attributes} />
      <HeaderNav />
      <img
        className={styles.cenovnikLogo}
        src="/window.svg"
        alt="Company Logo"
      />
      <div ref={slider} className={styles.cenovnikSlider}>
        <div>
          <h1>PVC PROZORI</h1>
          <div>
            <div></div>
            <div className={styles.measures}>W 80cm</div>
            <div className={styles.measures}>W 100cm</div>
            <div className={styles.measures}>W 120cm</div>
            <div className={styles.measures}>W 160cm</div>
            <div className={styles.measures}>W 180cm</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 80cm</div>
            <div className={styles.prices}>120€</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 100cm</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>310€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 120cm</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>320€</div>
            <div className={styles.prices}>340€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 160cm</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>320€</div>
            <div className={styles.prices}>340€</div>
            <div className={styles.prices}>390€</div>
          </div>
          <h5>*cena izrazena u evrima</h5>
        </div>
        <div>
          <h1>ALU PROZORI</h1>
          <div>
            <div></div>
            <div className={styles.measures}>W 80cm</div>
            <div className={styles.measures}>W 100cm</div>
            <div className={styles.measures}>W 120cm</div>
            <div className={styles.measures}>W 160cm</div>
            <div className={styles.measures}>W 180cm</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 80cm</div>
            <div className={styles.prices}>120€</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 100cm</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>310€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 120cm</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>320€</div>
            <div className={styles.prices}>340€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 160cm</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>320€</div>
            <div className={styles.prices}>340€</div>
            <div className={styles.prices}>390€</div>
          </div>
          <h5>*cena izrazena u evrima</h5>
        </div>
        <div>
          <h1>ULAZNA VRATA</h1>
          <div>
            <div></div>
            <div className={styles.measures}>W 80cm</div>
            <div className={styles.measures}>W 100cm</div>
            <div className={styles.measures}>W 120cm</div>
            <div className={styles.measures}>W 160cm</div>
            <div className={styles.measures}>W 180cm</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 80cm</div>
            <div className={styles.prices}>120€</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 100cm</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>310€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 120cm</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>320€</div>
            <div className={styles.prices}>340€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 160cm</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>320€</div>
            <div className={styles.prices}>340€</div>
            <div className={styles.prices}>390€</div>
          </div>
          <h5>*cena izrazena u evrima</h5>
        </div>
        <div>
          <h1>KLIZNI SISTEMI</h1>
          <div>
            <div></div>
            <div className={styles.measures}>W 80cm</div>
            <div className={styles.measures}>W 100cm</div>
            <div className={styles.measures}>W 120cm</div>
            <div className={styles.measures}>W 160cm</div>
            <div className={styles.measures}>W 180cm</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 80cm</div>
            <div className={styles.prices}>120€</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 100cm</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>310€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 120cm</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>320€</div>
            <div className={styles.prices}>340€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 160cm</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>320€</div>
            <div className={styles.prices}>340€</div>
            <div className={styles.prices}>390€</div>
          </div>
          <h5>*cena izrazena u evrima</h5>
        </div>
        <div>
          <h1>ROLETNE</h1>
          <div>
            <div></div>
            <div className={styles.measures}>W 80cm</div>
            <div className={styles.measures}>W 100cm</div>
            <div className={styles.measures}>W 120cm</div>
            <div className={styles.measures}>W 160cm</div>
            <div className={styles.measures}>W 180cm</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 80cm</div>
            <div className={styles.prices}>120€</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 100cm</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>310€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 120cm</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>320€</div>
            <div className={styles.prices}>340€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 160cm</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>320€</div>
            <div className={styles.prices}>340€</div>
            <div className={styles.prices}>390€</div>
          </div>
          <h5>*cena izrazena u evrima</h5>
        </div>
        <div>
          <h1>KOMARNICI</h1>
          <div>
            <div></div>
            <div className={styles.measures}>W 80cm</div>
            <div className={styles.measures}>W 100cm</div>
            <div className={styles.measures}>W 120cm</div>
            <div className={styles.measures}>W 160cm</div>
            <div className={styles.measures}>W 180cm</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 80cm</div>
            <div className={styles.prices}>120€</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 100cm</div>
            <div className={styles.prices}>160€</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>310€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 120cm</div>
            <div className={styles.prices}>200€</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>320€</div>
            <div className={styles.prices}>340€</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>H 160cm</div>
            <div className={styles.prices}>240€</div>
            <div className={styles.prices}>280€</div>
            <div className={styles.prices}>320€</div>
            <div className={styles.prices}>340€</div>
            <div className={styles.prices}>390€</div>
          </div>
          <h5>*cena izrazena u evrima</h5>
        </div>
      </div>
      <Footer data={props.footer.data[0].attributes} />
    </div>
  );
};

export default Cenovnik;
