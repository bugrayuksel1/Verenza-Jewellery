import React from "react";
import styles from "./styles/itemItems.module.css";
import assets from "../../../assets";
import Input from "../../../components/ui/Input";
import { Link } from "react-router-dom";

function ITemItems() {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <span className={styles.icon}>
          <img src={assets.icons.search} alt="search" />
        </span>
        <input placeholder="Ara..." />
      </div>
      <div className={styles.icons}>
        <Link>
          <img alt="favorite" src={assets.icons.favorite} />
        </Link>
        <Link to="/orderbag">
          <img alt="boxBag" src={assets.icons.boxBag} />
        </Link>
        <Link to="login">
          <img alt="user" src={assets.icons.user} />
        </Link>
      </div>
    </div>
  );
}

export default ITemItems;
