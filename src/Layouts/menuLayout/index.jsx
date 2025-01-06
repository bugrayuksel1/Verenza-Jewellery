import React from "react";
import styles from "./menuLayout.module.css";
import MenuItem from "../../components/ui/MenuItem";
import ITemItems from "./components/ITemItems";
import Contact from "../../pages/Contact";

function MenuLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.mainMenu}>
        <div className={styles.menuItems}>
          <MenuItem path="/" text="Anasayfa" />
          <MenuItem path="/products" text="Ürünler" />
          <MenuItem path="/about" text="Hakkımızda" />
          <MenuItem path="/contact" text="İletişim" />
        </div>
        <h1>VERENZA JEWELLERY</h1>
        <div className={styles.inputAndLogin}>
          <ITemItems />
        </div>
      </div>

      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default MenuLayout;
