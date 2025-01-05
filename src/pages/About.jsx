import React from "react";
import styles from "./styles/about.module.css";
import assets from "../assets";
function About() {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img alt="background" src={assets.photos.aboutBackground} />
      </div>
      <div className={styles.contents}>
        <h4>ARTICLE • OCTOBER 2022</h4>
        <h3>VERENZA JEWELLERY</h3>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus
          vulputate eu scelerisque felis imperdiet proin fermentum. Cras semper
          auctor neque vitae tempus quam pellentesque. Elementum sagittis vitae
          et leo duis. Elementum sagittis vitae et leo duis.
          <br /> Libero nunc consequat interdum varius. Habitant morbi tristique
          senectus et netus et malesuada fames ac.
        </h5>
      </div>
    </div>
  );
}

export default About;
