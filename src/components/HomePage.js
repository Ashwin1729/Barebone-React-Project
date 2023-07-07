import React from "react";
import styles from "./HomePage.module.css";
import HomepageBody from "./HomepageBody";

const HomePage = () => {
  return (
    <div className={styles.homepage_layout}>
      <div className={styles.navbar}>Navbar</div>
      <HomepageBody />
    </div>
  );
};

export default HomePage;
