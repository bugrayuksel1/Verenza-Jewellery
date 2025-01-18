import React from "react";
import styles from "./styles/card.module.css";

function Card({ children, title }) {
  return (
    <div className={styles.cardContainer}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

export default Card;
