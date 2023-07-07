import React from "react";
import styles from "./HomepageBody.module.css";

const HomepageBody = () => {
  return (
    <div className={styles.homepage_body}>
      <div className={styles.body_heading}>
        <div className={styles.heading_name}>Hi, Jennie Moss</div>
        <div className={styles.scanned_date}>
          Last Scanned on March 20th, 2023 11:30 PM IST
        </div>
      </div>
      <div className={styles.price_card}></div>
    </div>
  );
};

export default HomepageBody;
