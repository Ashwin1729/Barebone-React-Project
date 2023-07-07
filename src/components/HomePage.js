import React from "react";
import styles from "./HomePage.module.css";
import HomepageBody from "./HomepageBody";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className={styles.homepage_layout}>
      <Navbar />
      <HomepageBody />
    </div>
  );
};

export default HomePage;
