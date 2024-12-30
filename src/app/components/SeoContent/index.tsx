import React from "react";
import styles from "./Seo.module.scss";

const SeoContent = () => {
  return (
    <div>
      <h1 className={styles.visuallyHidden}>
        Welcome to OsloX - A startup developing Next-Gen Trading Platform
      </h1>
      <h2 className={styles.visuallyHidden}>
        Inquiries can be made to Co-Founder Håvard Holen at 95766717.
      </h2>
      <p className={styles.visuallyHidden}>
        OsloX is a tech collective based in Grünerløkka, Oslo, developing
        innovative apps for the finance market. Our latest app, Tickrpal, turns
        market data into actionable insights.
      </p>
    </div>
  );
};

export default SeoContent;
