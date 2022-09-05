import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/HeaderNav.module.scss";

const HeaderNav: NextPage = () => {
  const [showNav, setShowNav] = useState(false);
  const [showSmall, setShowSmall] = useState(false);

  useEffect(() => {
    const myHtlm = document.querySelector("html");
    if (showNav) {
      myHtlm?.classList.add("noOverflow");
    } else {
      myHtlm?.classList.remove("noOverflow");
    }
  }, [showNav]);

  return (
    <>
      <button
        onClick={() => setShowNav((prevState) => !prevState)}
        className={`${styles.menuButton} ${showNav ? styles.menuButtonOn : ""}`}
      >
        <div className={`${styles.line} ${styles.line1}`}></div>
        <div className={`${styles.line} ${styles.line2}`}></div>
        <div className={`${styles.line} ${styles.line3}`}></div>
      </button>
      <Link href="/">
        <a>
          <img className={styles.logoBig2} src="/logo.svg" alt="Logo Mimada" />
        </a>
      </Link>
      <div data-visible={showNav} className={styles.navContainer}>
        <Link href="/">
          <a>
            <img className={styles.logoBig} src="/logo.svg" alt="Logo Mimada" />
          </a>
        </Link>
        <img
          className={styles.logoSmall}
          src="/logo_small.svg"
          alt="Logo Mimada"
        />
        <div className={styles.navbar}>
          <Link href="/">
            <a className={styles.pocetna}>Početna</a>
          </Link>
          <div className={styles.proizvodi}>
            <Link href="/proizvodi">
              <a>Proizvodi</a>
            </Link>

            <div className={styles.menuWrap}>
              <div className={styles.menu}>
                <h1>Lorem ipsum dolor sit amet</h1>
                <div className={styles.menuInner}>
                  <div className={styles.menuInner1}>
                    <Link href="/pvcstolarija">
                      <a>
                        <div className={styles.menuOption}>
                          <img src="/menuStolarija.svg" alt="" />
                          <div>
                            <h2>PVC Stolarija</h2>
                            <h3>Vestibulum auctor dapibus</h3>
                          </div>
                        </div>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <div className={styles.menuOption}>
                          <img src="/menuKlizniSistemi.svg" alt="" />
                          <div>
                            <h2>Klizni sistemi</h2>
                            <h3>Vestibulum auctor dapibus</h3>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className={styles.menuInner2}>
                    <Link href="/">
                      <a>
                        <div className={styles.menuOption}>
                          <img src="/menuAluStolarija.svg" alt="" />
                          <div>
                            <h2>ALU Stolarija</h2>
                            <h3>Vestibulum auctor dapibus</h3>
                          </div>
                        </div>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <div className={styles.menuOption}>
                          <img src="/menuDodatna.svg" alt="" />
                          <div>
                            <h2>Dodatna oprema</h2>
                            <h3>Vestibulum auctor dapibus</h3>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/proizvodi">
            <a className={styles.proizvodiSmall}>
              Proizvodi
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setShowSmall((prev) => !prev);
                }}
                className={`${styles.proizvodiSmallArrow} ${
                  showSmall ? styles.rotiraj : ""
                }`}
              />
            </a>
          </Link>
          <div
            className={`${styles.dropdownSmall} ${
              showSmall ? styles.prikazi : ""
            }`}
          >
            <Link href="/pvcstolarija">
              <a>
                <div>
                  <img src="/smallPVC.svg" alt="" />
                  <h3>PVC Stolarija</h3>
                </div>
              </a>
            </Link>
            <Link href="/pvcstolarija">
              <a>
                <div>
                  <img src="/smallALU.svg" alt="" />
                  <h3>ALU Stolarija</h3>
                </div>
              </a>
            </Link>
            <Link href="/pvcstolarija">
              <a>
                <div>
                  <img src="/smallKLIZNI.svg" alt="" />
                  <h3>Klizni sistemi</h3>
                </div>
              </a>
            </Link>
            <Link href="/pvcstolarija">
              <a>
                <div>
                  <img src="/smallDODATNA.svg" alt="" />
                  <h3>Dodatna oprema</h3>
                </div>
              </a>
            </Link>
          </div>
          <Link href="/cenovnik">
            <a className={styles.cenovnik}>Cenovnik</a>
          </Link>
          <Link href="/kontakt">
            <a className={styles.kontakt}>Kontakt</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
