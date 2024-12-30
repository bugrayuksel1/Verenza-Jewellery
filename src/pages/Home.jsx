import React from "react";
import styles from "./styles/home.module.css";
import MenuLayout from "../Layouts/menuLayout";
import Button from "../components/ui/Button";
import Categories from "./Categories";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <MenuLayout>
      <div className={styles.homeBackground}>
        <h1>Verenza Jewellery</h1>
        <p>Fall has arrived. Shop for our new releases starting today.</p>

        <Button>SHOP NOW</Button>
      </div>
      <div className={styles.categories}>
        <Categories />
      </div>
      <div className={styles.about}>
        <About />
      </div>
      <div className={styles.contact}>
        <Contact />
      </div>
    </MenuLayout>
  );
}

export default Home;
