import React from "react";
import styles from "./styles/itemItems.module.css";
import assets from "../../../assets";
import Input from "../../../components/ui/Input";

function ITemItems() {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <Input placeholder="Ara..." />
      </div>
      <div className={styles.icons}>
        <img alt="favorite" src={assets.icons.favorite} />
        <img alt="boxBag" src={assets.icons.boxBag} />
        <img alt="user" src={assets.icons.user} />
      </div>
    </div>
  );
}

export default ITemItems;
