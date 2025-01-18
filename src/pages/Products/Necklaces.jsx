import React from "react";
import MenuLayout from "../../Layouts/menuLayout";
import styles from "./styles/necklaces.module.css";
import Contact from "../../pages/Contact";
import NecklaceList from "../../components/forms/ProductList/NecklaceList";

function Necklaces() {
  return (
    <MenuLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Kolyeler</h1>
        </div>
        <div className={styles.filter}></div>
        <div className={styles.products}>
          <NecklaceList />
        </div>
        <div className={styles.contactDiv}>
          <Contact />
        </div>
      </div>
    </MenuLayout>
  );
}

export default Necklaces;
