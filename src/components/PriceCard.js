import React from "react";
import styles from "./PriceCard.module.css";

const PriceCard = ({ data }) => {
  return (
    <div className={styles.price_card} style={{ backgroundColor: data.color }}>
      <div className={styles.price}>$ {data.price}</div>
      <div className={styles.price_description}>{data.description}</div>
    </div>
  );
};

export default PriceCard;
