import MenuLayout from "../../Layouts/menuLayout";
import Contact from "../Contact";
import EarringList from "../../components/forms/ProductList/EarringList";
import styles from "./styles/earrings.module.css";

function Earrings() {
  return (
    <MenuLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Küpeler</h1>
        </div>
        <div className={styles.filter}></div>
        <div className={styles.products}>
          <EarringList />
        </div>
        <div className={styles.contactDiv}>
          <Contact />
        </div>
      </div>
    </MenuLayout>
  );
}

export default Earrings;
