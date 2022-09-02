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
  const slider = useRef<HTMLDivElement>(null);

  console.log(props.cenovnik.data[0].attributes);

  const pvc = props.cenovnik.data[0].attributes;
  const alu = props.cenovnik.data[1].attributes;
  const ulazna = props.cenovnik.data[2].attributes;
  const klizni = props.cenovnik.data[3].attributes;
  const roletne = props.cenovnik.data[4].attributes;
  const komarnici = props.cenovnik.data[5].attributes;

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
          <h1>{pvc.naslov_tabele}</h1>
          <div>
            <div></div>
            <div className={styles.measures}>
              {pvc.horizontalno_zaglavlje_1}
            </div>
            <div className={styles.measures}>
              {pvc.horizontalno_zaglavlje_2}
            </div>
            <div className={styles.measures}>
              {pvc.horizontalno_zaglavlje_3}
            </div>
            <div className={styles.measures}>
              {pvc.horizontalno_zaglavlje_4}
            </div>
            <div className={styles.measures}>
              {pvc.horizontalno_zaglavlje_5}
            </div>
            <div className={styles.line}></div>
            <div className={styles.measures}>{pvc.vertikalno_zaglavlje_1}</div>
            <div className={styles.prices}>{pvc.polje_1}</div>
            <div className={styles.prices}>{pvc.polje_2}</div>
            <div className={styles.prices}>{pvc.polje_3}</div>
            <div className={styles.prices}>{pvc.polje_4}</div>
            <div className={styles.prices}>{pvc.polje_5}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>{pvc.vertikalno_zaglavlje_2}</div>
            <div className={styles.prices}>{pvc.polje_6}</div>
            <div className={styles.prices}>{pvc.polje_7}</div>
            <div className={styles.prices}>{pvc.polje_8}</div>
            <div className={styles.prices}>{pvc.polje_9}</div>
            <div className={styles.prices}>{pvc.polje_10}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>{pvc.vertikalno_zaglavlje_3}</div>
            <div className={styles.prices}>{pvc.polje_11}</div>
            <div className={styles.prices}>{pvc.polje_12}</div>
            <div className={styles.prices}>{pvc.polje_13}</div>
            <div className={styles.prices}>{pvc.polje_14}</div>
            <div className={styles.prices}>{pvc.polje_15}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>{pvc.vertikalno_zaglavlje_4}</div>
            <div className={styles.prices}>{pvc.polje_16}</div>
            <div className={styles.prices}>{pvc.polje_17}</div>
            <div className={styles.prices}>{pvc.polje_18}</div>
            <div className={styles.prices}>{pvc.polje_19}</div>
            <div className={styles.prices}>{pvc.polje_20}</div>
          </div>
          <h5>{pvc.fusnota_tabele}</h5>
        </div>
        <div>
          <h1>{alu.naslov_tabele}</h1>
          <div>
            <div></div>
            <div className={styles.measures}>
              {alu.horizontalno_zaglavlje_1}
            </div>
            <div className={styles.measures}>
              {alu.horizontalno_zaglavlje_2}
            </div>
            <div className={styles.measures}>
              {alu.horizontalno_zaglavlje_3}
            </div>
            <div className={styles.measures}>
              {alu.horizontalno_zaglavlje_4}
            </div>
            <div className={styles.measures}>
              {alu.horizontalno_zaglavlje_5}
            </div>
            <div className={styles.line}></div>
            <div className={styles.measures}>{alu.vertikalno_zaglavlje_1}</div>
            <div className={styles.prices}>{alu.polje_1}</div>
            <div className={styles.prices}>{alu.polje_2}</div>
            <div className={styles.prices}>{alu.polje_3}</div>
            <div className={styles.prices}>{alu.polje_4}</div>
            <div className={styles.prices}>{alu.polje_5}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>{alu.vertikalno_zaglavlje_2}</div>
            <div className={styles.prices}>{alu.polje_6}</div>
            <div className={styles.prices}>{alu.polje_7}</div>
            <div className={styles.prices}>{alu.polje_8}</div>
            <div className={styles.prices}>{alu.polje_9}</div>
            <div className={styles.prices}>{alu.polje_10}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>{alu.vertikalno_zaglavlje_3}</div>
            <div className={styles.prices}>{alu.polje_11}</div>
            <div className={styles.prices}>{alu.polje_12}</div>
            <div className={styles.prices}>{alu.polje_13}</div>
            <div className={styles.prices}>{alu.polje_14}</div>
            <div className={styles.prices}>{alu.polje_15}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>{alu.vertikalno_zaglavlje_4}</div>
            <div className={styles.prices}>{alu.polje_16}</div>
            <div className={styles.prices}>{alu.polje_17}</div>
            <div className={styles.prices}>{alu.polje_18}</div>
            <div className={styles.prices}>{alu.polje_19}</div>
            <div className={styles.prices}>{alu.polje_20}</div>
          </div>
          <h5>{alu.fusnota_tabele}</h5>
        </div>
        <div>
          <h1>{ulazna.naslov_tabele}</h1>
          <div>
            <div></div>
            <div className={styles.measures}>
              {ulazna.horizontalno_zaglavlje_1}
            </div>
            <div className={styles.measures}>
              {ulazna.horizontalno_zaglavlje_2}
            </div>
            <div className={styles.measures}>
              {ulazna.horizontalno_zaglavlje_3}
            </div>
            <div className={styles.measures}>
              {ulazna.horizontalno_zaglavlje_4}
            </div>
            <div className={styles.measures}>
              {ulazna.horizontalno_zaglavlje_5}
            </div>
            <div className={styles.line}></div>
            <div className={styles.measures}>
              {ulazna.vertikalno_zaglavlje_1}
            </div>
            <div className={styles.prices}>{ulazna.polje_1}</div>
            <div className={styles.prices}>{ulazna.polje_2}</div>
            <div className={styles.prices}>{ulazna.polje_3}</div>
            <div className={styles.prices}>{ulazna.polje_4}</div>
            <div className={styles.prices}>{ulazna.polje_5}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>
              {ulazna.vertikalno_zaglavlje_2}
            </div>
            <div className={styles.prices}>{ulazna.polje_6}</div>
            <div className={styles.prices}>{ulazna.polje_7}</div>
            <div className={styles.prices}>{ulazna.polje_8}</div>
            <div className={styles.prices}>{ulazna.polje_9}</div>
            <div className={styles.prices}>{ulazna.polje_10}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>
              {ulazna.vertikalno_zaglavlje_3}
            </div>
            <div className={styles.prices}>{ulazna.polje_11}</div>
            <div className={styles.prices}>{ulazna.polje_12}</div>
            <div className={styles.prices}>{ulazna.polje_13}</div>
            <div className={styles.prices}>{ulazna.polje_14}</div>
            <div className={styles.prices}>{ulazna.polje_15}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>
              {ulazna.vertikalno_zaglavlje_4}
            </div>
            <div className={styles.prices}>{ulazna.polje_16}</div>
            <div className={styles.prices}>{ulazna.polje_17}</div>
            <div className={styles.prices}>{ulazna.polje_18}</div>
            <div className={styles.prices}>{ulazna.polje_19}</div>
            <div className={styles.prices}>{ulazna.polje_20}</div>
          </div>
          <h5>{ulazna.fusnota_tabele}</h5>
        </div>
        <div>
          <h1>{klizni.naslov_tabele}</h1>
          <div>
            <div></div>
            <div className={styles.measures}>
              {klizni.horizontalno_zaglavlje_1}
            </div>
            <div className={styles.measures}>
              {klizni.horizontalno_zaglavlje_2}
            </div>
            <div className={styles.measures}>
              {klizni.horizontalno_zaglavlje_3}
            </div>
            <div className={styles.measures}>
              {klizni.horizontalno_zaglavlje_4}
            </div>
            <div className={styles.measures}>
              {klizni.horizontalno_zaglavlje_5}
            </div>
            <div className={styles.line}></div>
            <div className={styles.measures}>
              {klizni.vertikalno_zaglavlje_1}
            </div>
            <div className={styles.prices}>{klizni.polje_1}</div>
            <div className={styles.prices}>{klizni.polje_2}</div>
            <div className={styles.prices}>{klizni.polje_3}</div>
            <div className={styles.prices}>{klizni.polje_4}</div>
            <div className={styles.prices}>{klizni.polje_5}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>
              {klizni.vertikalno_zaglavlje_2}
            </div>
            <div className={styles.prices}>{klizni.polje_6}</div>
            <div className={styles.prices}>{klizni.polje_7}</div>
            <div className={styles.prices}>{klizni.polje_8}</div>
            <div className={styles.prices}>{klizni.polje_9}</div>
            <div className={styles.prices}>{klizni.polje_10}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>
              {klizni.vertikalno_zaglavlje_3}
            </div>
            <div className={styles.prices}>{klizni.polje_11}</div>
            <div className={styles.prices}>{klizni.polje_12}</div>
            <div className={styles.prices}>{klizni.polje_13}</div>
            <div className={styles.prices}>{klizni.polje_14}</div>
            <div className={styles.prices}>{klizni.polje_15}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>
              {klizni.vertikalno_zaglavlje_4}
            </div>
            <div className={styles.prices}>{klizni.polje_16}</div>
            <div className={styles.prices}>{klizni.polje_17}</div>
            <div className={styles.prices}>{klizni.polje_18}</div>
            <div className={styles.prices}>{klizni.polje_19}</div>
            <div className={styles.prices}>{klizni.polje_20}</div>
          </div>
          <h5>{klizni.fusnota_tabele}</h5>
        </div>
        <div>
          <h1>{roletne.naslov_tabele}</h1>
          <div>
            <div></div>
            <div className={styles.measures}>
              {roletne.horizontalno_zaglavlje_1}
            </div>
            <div className={styles.measures}>
              {roletne.horizontalno_zaglavlje_2}
            </div>
            <div className={styles.measures}>
              {roletne.horizontalno_zaglavlje_3}
            </div>
            <div className={styles.measures}>
              {roletne.horizontalno_zaglavlje_4}
            </div>
            <div className={styles.measures}>
              {roletne.horizontalno_zaglavlje_5}
            </div>
            <div className={styles.line}></div>
            <div className={styles.measures}>
              {roletne.vertikalno_zaglavlje_1}
            </div>
            <div className={styles.prices}>{roletne.polje_1}</div>
            <div className={styles.prices}>{roletne.polje_2}</div>
            <div className={styles.prices}>{roletne.polje_3}</div>
            <div className={styles.prices}>{roletne.polje_4}</div>
            <div className={styles.prices}>{roletne.polje_5}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>
              {roletne.vertikalno_zaglavlje_2}
            </div>
            <div className={styles.prices}>{roletne.polje_6}</div>
            <div className={styles.prices}>{roletne.polje_7}</div>
            <div className={styles.prices}>{roletne.polje_8}</div>
            <div className={styles.prices}>{roletne.polje_9}</div>
            <div className={styles.prices}>{roletne.polje_10}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>
              {roletne.vertikalno_zaglavlje_3}
            </div>
            <div className={styles.prices}>{roletne.polje_11}</div>
            <div className={styles.prices}>{roletne.polje_12}</div>
            <div className={styles.prices}>{roletne.polje_13}</div>
            <div className={styles.prices}>{roletne.polje_14}</div>
            <div className={styles.prices}>{roletne.polje_15}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>
              {roletne.vertikalno_zaglavlje_4}
            </div>
            <div className={styles.prices}>{roletne.polje_16}</div>
            <div className={styles.prices}>{roletne.polje_17}</div>
            <div className={styles.prices}>{roletne.polje_18}</div>
            <div className={styles.prices}>{roletne.polje_19}</div>
            <div className={styles.prices}>{roletne.polje_20}</div>
          </div>
          <h5>{roletne.fusnota_tabele}</h5>
        </div>
        <div>
          <h1>{komarnici.naslov_tabele}</h1>
          <div>
            <div></div>
            <div className={styles.measures}>
              {komarnici.horizontalno_zaglavlje_1}
            </div>
            <div className={styles.measures}>
              {komarnici.horizontalno_zaglavlje_2}
            </div>
            <div className={styles.measures}>
              {komarnici.horizontalno_zaglavlje_3}
            </div>
            <div className={styles.measures}>
              {komarnici.horizontalno_zaglavlje_4}
            </div>
            <div className={styles.measures}>
              {komarnici.horizontalno_zaglavlje_5}
            </div>
            <div className={styles.line}></div>
            <div className={styles.measures}>
              {komarnici.vertikalno_zaglavlje_1}
            </div>
            <div className={styles.prices}>{komarnici.polje_1}</div>
            <div className={styles.prices}>{komarnici.polje_2}</div>
            <div className={styles.prices}>{komarnici.polje_3}</div>
            <div className={styles.prices}>{komarnici.polje_4}</div>
            <div className={styles.prices}>{komarnici.polje_5}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>
              {komarnici.vertikalno_zaglavlje_2}
            </div>
            <div className={styles.prices}>{komarnici.polje_6}</div>
            <div className={styles.prices}>{komarnici.polje_7}</div>
            <div className={styles.prices}>{komarnici.polje_8}</div>
            <div className={styles.prices}>{komarnici.polje_9}</div>
            <div className={styles.prices}>{komarnici.polje_10}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>
              {komarnici.vertikalno_zaglavlje_3}
            </div>
            <div className={styles.prices}>{komarnici.polje_11}</div>
            <div className={styles.prices}>{komarnici.polje_12}</div>
            <div className={styles.prices}>{komarnici.polje_13}</div>
            <div className={styles.prices}>{komarnici.polje_14}</div>
            <div className={styles.prices}>{komarnici.polje_15}</div>
            <div className={styles.line}></div>
            <div className={styles.measures}>
              {komarnici.vertikalno_zaglavlje_4}
            </div>
            <div className={styles.prices}>{komarnici.polje_16}</div>
            <div className={styles.prices}>{komarnici.polje_17}</div>
            <div className={styles.prices}>{komarnici.polje_18}</div>
            <div className={styles.prices}>{komarnici.polje_19}</div>
            <div className={styles.prices}>{komarnici.polje_20}</div>
          </div>
          <h5>*cena izrazena u evrima</h5>
        </div>
      </div>
      <Footer data={props.footer.data[0].attributes} />
    </div>
  );
};

export default Cenovnik;
