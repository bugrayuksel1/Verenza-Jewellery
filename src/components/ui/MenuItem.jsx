import React from "react";
import styles from "./styles/menuItem.module.css";
import { Link } from "react-router-dom";

function MenuItem({ path, icon, text }) {
  return (
    <Link to={path}>
      <div className={styles.mainMenuItem}>
        <span>{text}</span>
      </div>
    </Link>
  );
}

export default MenuItem;
