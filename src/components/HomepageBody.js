import React from "react";
import PriceCard from "./PriceCard";
import styles from "./HomepageBody.module.css";

const priceData = [
  {
    price: "400,000",
    description: "Total budget you own",
    color: "white",
  },
  {
    price: "299,762",
    description: "Spent month-to-date",
    color: "#a7e2f0",
  },
  {
    price: "2,874,582",
    description: "Forecasted till month end",
    color: "#a5eed4",
  },
];

const HomepageBody = () => {
  return (
    <div className={styles.homepage_body}>
      <div className={styles.body_heading}>
        <div className={styles.heading_name}>Hi, Jennie Moss</div>
        <div className={styles.scanned_date}>
          Last Scanned on March 20th, 2023 11:30 PM IST
        </div>
      </div>
      <div className={styles.price_card_container}>
        {priceData.map((data) => {
          return <PriceCard data={data} />;
        })}
      </div>
    </div>
  );
};

export default HomepageBody;
