import React from "react";
import styles from "./styles/contact.module.css";
import { Link } from "react-router-dom";
import assets from "../assets";
function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <h4>©2024, VERENZA JEWELLERY</h4>
      </div>
      <div className={styles.contents}>
        <div className={styles.links}>
          <ul>
            <li>
              <Link>İPTAL VE İADE POLİTİKASI</Link>
            </li>
            <li>
              <Link>TESLİMAT KOŞULLARI</Link>
            </li>
            <li>
              <Link>MESAFELİ SATIŞ SÖZLEŞMESİ</Link>
            </li>
          </ul>
        </div>
        <div className={styles.adress}>
          <h5>
            <img alt="location" src={assets.icons.location} />
            Kuyumcukent AVM <br /> Yenibosna Merkez Mahallesi <br />
            Kuyumcukent Sokak No:4 P.K.1005
            <br /> Bahçelievler / İSTANBUL
          </h5>
        </div>
      </div>
    </div>
  );
}
export default Contact;
