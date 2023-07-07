import React from "react";
import styles from "./Navbar.module.css";
import cloud from "../assets/cloud.png";
import cube from "../assets/cube.png";
import symbol from "../assets/symbol.jpg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.upper_section}>
        <img src={cloud} alt="cloud png" className={styles.cloudImg} />
        <div className={styles.cube_image_container}>
          <img src={cube} alt="cloud png" className={styles.cubeImg} />
          <img src={cube} alt="cube png" className={styles.cubeImg} />
          <img src={cube} alt="cube png" className={styles.cubeImg} />
          <img src={cube} alt="cube png" className={styles.cubeImg} />
          <img src={cube} alt="cube png" className={styles.cubeImg} />
        </div>
      </div>
      <div className={styles.symbol}>
        <img src={symbol} alt="cloud png" className={styles.symbolImg} />
      </div>
    </div>
  );
};

export default Navbar;
