import React, { useState } from "react";
import styles from "./styles/card.module.css";
import assets from "../../assets";

function Card({ children, title }) {
  return (
    <div className={styles.cardContainer}>
      {title && <h2>{title}</h2>}
      {children}
      <img alt="exit" src={assets.icons.exit} />
    </div>
  );
}

export default Card;
