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
        <Link>
          <img alt="necklace" src={assets.photos.necklace} />
        </Link>
        <Link>
          <img alt="earring" src={assets.photos.earring} />
        </Link>
        <Link>
          <img alt="bracelet" src={assets.photos.bracelet} />
        </Link>
        <Link>
          <img alt="rings" src={assets.photos.rings} />
        </Link>
        <Link>
          <img alt="charm" src={assets.photos.charm} />
        </Link>
      </div>
    </div>
  );
}

export default Categories;
