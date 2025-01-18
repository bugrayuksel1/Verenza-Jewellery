import React from "react";
import MenuLayout from "../../Layouts/menuLayout";
import Contact from "../Contact";
import BraceletList from "../../components/forms/ProductList/BraceletList";
import styles from "./styles/bracelets.module.css";

function Bracelets() {
  return (
    <MenuLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Bileklikler</h1>
        </div>
        <div className={styles.filter}></div>
        <div className={styles.products}>
          <BraceletList />
        </div>
        <div className={styles.contactDiv}>
          <Contact />
        </div>
      </div>
    </MenuLayout>
  );
}

export default Bracelets;
