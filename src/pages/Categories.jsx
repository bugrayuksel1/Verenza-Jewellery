import React from "react";
import styles from "./styles/categories.module.css";
import { Link } from "react-router-dom";
import assets from "../assets";

function Categories() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h3>Shop by category</h3>
        <h4>Indulge in what we offer.</h4>
      </div>
      <div className={styles.contents}>
        <Link to="/products/necklaces">
          <img alt="necklace" src={assets.photos.necklace} />
        </Link>
        <Link to="/products/earrings">
          <img alt="earring" src={assets.photos.earring} />
        </Link>
        <Link to="/products/bracelets">
          <img alt="bracelet" src={assets.photos.bracelet} />
        </Link>
        <Link to="/products/rings">
          <img alt="rings" src={assets.photos.rings} />
        </Link>
        <Link to="/products/charms">
          <img alt="charm" src={assets.photos.charm} />
        </Link>
      </div>
    </div>
  );
}

export default Categories;
