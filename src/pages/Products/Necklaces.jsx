import React from "react";
import MenuLayout from "../../Layouts/menuLayout";
import styles from "./styles/necklaces.module.css";
import Contact from "../../pages/Contact";

function Necklaces() {
  return (
    <MenuLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Necklaces</h1>
          <h5>Lorem ipsum dolor sit amet.</h5>
        </div>
        <div className={styles.filter}></div>
        <div className={styles.products}></div>
        <div>
          <Contact />
        </div>
      </div>
    </MenuLayout>
  );
}

export default Necklaces;
