import React from "react";
import styles from "./Table.module.css";

const Table = ({ data }) => {
  let tableRows = <div></div>;
  if (data.type === "Buckets") {
    tableRows = data.rows.map((tableRow) => {
      return (
        <div className={styles.table_row}>
          <div className={styles.row_item} style={{ color: "blue" }}>
            {tableRow.name}
          </div>
          <div className={styles.row_item}>$ {tableRow.budget}</div>
          <div className={styles.row_item}>$ {tableRow.spend}</div>
          <div className={styles.row_item}>$ {tableRow.forecast}</div>
        </div>
      );
    });
  } else if (data.type === "Approvals") {
    tableRows = data.rows.map((tableRow) => {
      return (
        <div className={styles.table_row}>
          <div className={styles.row_item} style={{ color: "blue" }}>
            {tableRow.bucket_name}
          </div>
          <div className={styles.row_item}>$ {tableRow.current_budget}</div>
          <div className={styles.row_item}>$ {tableRow.requested_budget}</div>
          <div className={styles.row_item} style={{ color: "blue" }}>
            {tableRow.requested_by}
          </div>
          <div className={styles.row_item} style={{ color: "blue" }}>
            {tableRow.requested_to}
          </div>
        </div>
      );
    });
  }

  return (
    <div className={styles.main_container}>
      <div className={styles.table_heading}>{data.heading}</div>
      <div className={styles.table_container}>
        <div className={styles.table_row}>
          {data.heading_items.map((heading) => {
            return <div className={styles.heading_item}>{heading}</div>;
          })}
        </div>
        {tableRows}
      </div>
    </div>
  );
};

export default Table;
