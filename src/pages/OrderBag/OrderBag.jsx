import React from "react";
import MenuLayout from "../../Layouts/menuLayout";
import styles from "./orderBag.module.css";
import Contact from "../Contact";

function OrderBag() {
  return (
    <MenuLayout>
      <div className={styles.container}>
        <div className={styles.orderReview}>
          <h3>Sepet Özeti</h3>
          <hr className={styles.hr} />
        </div>
        <div className={styles.orderTotal}>
          <h3>Alışveriş Tutarı</h3>
        </div>
        {/* <div className={styles.contactDiv}>
          <Contact />
        </div> */}
      </div>
    </MenuLayout>
  );
}

export default OrderBag;
