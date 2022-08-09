import type { NextPage } from "next";
import styles from "../styles/Random.module.scss";
import HeaderContact from "../components/HeaderContact";
import HeaderNav from "../components/HeaderNav";

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