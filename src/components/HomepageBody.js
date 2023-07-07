import React from "react";
import PriceCard from "./PriceCard";
import styles from "./HomepageBody.module.css";
import Table from "./Table";

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

const tableData = [
  {
    type: "Buckets",
    heading: "Buckets you own",
    heading_items: ["Name", "Budget", "Spend", "Forecast"],
    rows: [
      {
        name: "ACME Corp",
        budget: "200,000",
        spend: "173,762",
        forecast: "205,049",
      },
      {
        name: "Raman Inc",
        budget: "200,000",
        spend: "124,762",
        forecast: "292,629",
      },
    ],
  },
  {
    type: "Approvals",
    heading: "Approvals assigned to you",
    heading_items: [
      "Bucket Name",
      "Current Budget",
      "Requested Budget",
      "Requested By",
      "",
    ],
    rows: [
      {
        bucket_name: "ACME Corp",
        current_budget: "200,000",
        requested_budget: "250,000",
        requested_by: "Joe Hilfinger",
        requested_to: "Joe Hilfinger",
      },
    ],
  },
  {
    type: "Buckets",
    heading: "Buckets you are member of",
    heading_items: ["Name", "Budget", "Spend", "Forecast"],
    rows: [
      {
        name: "Longate",
        budget: "200,000",
        spend: "173,762",
        forecast: "205,049",
      },
    ],
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
      <div className={styles.table_container}>
        {tableData.map((data) => {
          return <Table data={data} />;
        })}
      </div>
    </div>
  );
};

export default HomepageBody;
