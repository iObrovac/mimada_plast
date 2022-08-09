import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Random.module.scss";
import HeaderContact from "../components/HeaderContact";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import React, { useState } from "react";

const Random: NextPage = () => {
  return (
    <div className={styles.homepageContainer}>
      <h1>OVO JE SAMO DA SE VIDI TEST</h1>
      <HeaderContact />
      <HeaderNav />
    </div>
  );
};

export default Random;
