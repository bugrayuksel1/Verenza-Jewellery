import React from "react";
import styles from "./styles/braceletList.module.css";
import bracelets from "../../../Lists/Bracelet";
import Button from "../../ui/Button";

function BraceletList() {
  return (
    <div className={styles.container}>
      {bracelets.map((bracelet) => (
        <div key={bracelet.id} className={styles.bracelet}>
          <div className={styles.photos}>
            <img src={bracelet.image} alt={bracelet.description} />
          </div>
          <div className={styles.bottom}>
            <p>{bracelet.description}</p>
            <p>{bracelet.price} </p>
            <Button>Sepete Ekle</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BraceletList;
