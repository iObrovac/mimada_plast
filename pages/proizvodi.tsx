import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "../components/Footer";
import HeaderContact from "../components/HeaderContact";
import HeaderNav from "../components/HeaderNav";
import { IProData, IProizvodi } from "../intefaces/proizvodi";
import styles from "../styles/Proizvodi.module.scss";

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

const proizvodiStatic = [
  {
    src: "/proizvodi1.svg",
    routePath: "/pvc-stolarija-novi-sad",
  },
  {
    src: "/proizvodi2.svg",
    routePath: "/",
  },
  {
    src: "/proizvodi3.svg",
    routePath: "/",
  },
  {
    src: "/proizvodi4.svg",
    routePath: "/roletne",
  },
];

interface ProizvodWrapProps {
  children: React.ReactNode;
  linkPath: string;
}

const ProizvodWrap = ({ linkPath, children }: ProizvodWrapProps) =>
  linkPath ? (
    <Link href={linkPath}>
      <div className={styles.proizvod1}>{children}</div>
    </Link>
  ) : (
    <div className={styles.proizvod1}>{children}</div>
  );

const Proizvodi: NextPage<IProizvodi> = (props) => {
  const [proizvodi] = useState<IProData>(props.proizvodi?.data[0].attributes);

  return (
    <div className={styles.container}>
      <HeaderContact data={props.header?.data[0].attributes} />
      <HeaderNav />

      <img className={styles.window} src="/window.svg" alt="Window Mimada" />
      <h1 className={styles.title}>Proizvodi</h1>

      <div className={styles.proizvodi}>
        {proizvodiStatic.map((proizvod, proizvodIndex) => {
          const prozivodiObjKeySufix = proizvodIndex + 1;
          return (
            <ProizvodWrap
              linkPath={proizvod.routePath}
              key={prozivodiObjKeySufix}
            >
              <h3>{proizvodi[`naslov_${prozivodiObjKeySufix}`]}</h3>
              <p>{proizvodi[`text_${prozivodiObjKeySufix}`]}</p>
              <img src={proizvod.src} alt="" />
            </ProizvodWrap>
          );
        })}
      </div>

      <Footer data={props.footer.data[0].attributes} />
    </div>
  );
};

export default Proizvodi;
