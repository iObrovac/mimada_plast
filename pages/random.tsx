import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import HeaderContact from "../components/HeaderContact";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import React, { useState } from "react";

const Random: NextPage = () => {
  return (
    <div className={styles.homepageContainer}>
      <Head>
        <title>MIMADA VV PLAST</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderContact />
      <HeaderNav />
      <img
        className={styles.homeWindow}
        src="/window.svg"
        alt="Window Mimada"
      />

      <h1 className={styles.mainTitle}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing.
      </h1>

      <button
        onClick={() => console.log("igor")}
        className={styles.konsultacije}
      >
        Zakažite besplatne konsultacije
      </button>

      <div className={styles.services}>
        <h2 className={styles.servicesTitle}>
          Phasellus ultrices nulla quis nibh.
        </h2>
        <div className={styles.serviceFirst}>
          <div className={styles.firstLeft}>
            <div className={styles.firstLeft1}>
              <div className={styles.firstLeft1_number}>1</div>
              <div className={styles.firstLeft1_text}>
                <h3>PVC STOLARIJA</h3>
                <p>
                  Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                  consectetuer ligula vulputate sem tristique cursus.
                </p>
              </div>
            </div>
            <div className={styles.firstLeft2}>
              <div className={styles.firstLeft2_number}>2</div>
              <div className={styles.firstLeft2_text}>
                <h3>IZOLACIONO STAKLO</h3>
                <p>
                  Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                  consectetuer ligula vulputate sem tristique cursus.
                </p>
              </div>
            </div>
            <div className={styles.firstLeft3}>
              <div className={styles.firstLeft3_number}>3</div>
              <div className={styles.firstLeft3_text}>
                <h3>OKOV</h3>
                <p>
                  Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                  consectetuer ligula vulputate sem tristique cursus.
                </p>
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
        <h2 className={styles.subtitleMimada}>
          ALU & PVC STOLARIJA MIMADA VV PLAST
        </h2>
        <img
          className={styles.dottedLine}
          src="/wave.svg"
          alt="Dotted Curved Line"
        />
        <div className={styles.serviceSecond}>
          <div className={styles.pvc}>
            <img src="/pvc.svg" alt="" />
            <h4>PVC STOLARIJA</h4>
            <p>
              Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
              consectetuer ligula vulputate sem tristique cursus.
            </p>
          </div>
          <div className={styles.alu}>
            <img src="/alu.svg" alt="" />
            <h4>ALU STOLARIJA</h4>
            <p>
              Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
              consectetuer ligula vulputate sem tristique cursus.
            </p>
          </div>
          <div className={styles.ulazna}>
            <img src="/ulazna.svg" alt="" />
            <h4>ULAZNA VRATA</h4>
            <p>
              Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
              consectetuer ligula vulputate sem tristique cursus.
            </p>
          </div>
          <div className={styles.klizni}>
            <img src="/klizni.svg" alt="" />
            <h4>KLIZNI SISTEMI</h4>
            <p>
              Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
              consectetuer ligula vulputate sem tristique cursus.
            </p>
          </div>
          <div className={styles.roletne}>
            <img src="/roletne.svg" alt="" />
            <h4>ROLETNE</h4>
            <p>
              Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
              consectetuer ligula vulputate sem tristique cursus.
            </p>
          </div>
          <div className={styles.komarnici}>
            <img src="/komarnici.svg" alt="" />
            <h4>KOMARNICI</h4>
            <p>
              Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
              consectetuer ligula vulputate sem tristique cursus.
            </p>
          </div>
        </div>
      </div>

      <h1 className={styles.titleSecond}>Lorem ipsum dolor sit amet.</h1>
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
            <h4>Donec nec justo eget felis facilisis.</h4>
            <p>
              Phasellus ultrices nulla quis nibh. Quisque a lectus donec
              consectet.
            </p>
          </div>
          <div className={styles.square2}>
            <img src="/02.svg" alt="Number Two" />
            <h4>Donec nec justo eget felis.</h4>
            <p>
              Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
              consectet ligula vulputate.
            </p>
          </div>
          <div className={styles.square3}>
            <img src="/03.svg" alt="Number Three" />
            <h4>Donec nec justo eget.</h4>
            <p>Phasellus ultrices nulla quis nibh. Quisque a lectus. </p>
          </div>
          <div className={styles.square4}>
            <img src="/04.svg" alt="Number Four" />
            <h4>Justo eget felis facilisis.</h4>
            <p>
              Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
              consectet ligula vulputate sem tristique cursus.
            </p>
          </div>

          <section className={styles.dots}>
            <label
              // onClick={handlerFunction1}
              htmlFor={styles.radio1}
              id={styles.label1}
            ></label>
            <label
              // onClick={handlerFunction2}
              htmlFor={styles.radio2}
              id={styles.label2}
            ></label>
            <label
              // onClick={handlerFunction3}
              htmlFor={styles.radio3}
              id={styles.label3}
            ></label>
            <label
              // onClick={handlerFunction4}
              htmlFor={styles.radio4}
              id={styles.label4}
            ></label>
          </section>
        </div>
      </div>
      <div className={styles.sponsors}>
        <h1>PARTNERI</h1>
        <div className={styles.sponsorsContainer}>
          <div className={styles.sponsor1}>
            <img src="/trocal.svg" alt="Trocal Logo" />
            <p>
              Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
              mauris sit orci.
            </p>
          </div>
          <div className={styles.sponsor2}>
            <img src="/kbe.svg" alt="KBE Logo" />
            <p>
              Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
              euismod in, pharetra a, ultricies.
            </p>
          </div>
          <div className={styles.sponsor3}>
            <img src="/winkhaus.svg" alt="Winkhaus Logo" />
            <p>
              Praesent dapibus, neque id cursus faucibus, tortor neque egestas
              auguae.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Random;
