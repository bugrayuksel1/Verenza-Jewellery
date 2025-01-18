import Button from "../../ui/Button";
import styles from "./styles/earringList.module.css";
import bracelets from "../../../Lists/Earring";
import earrings from "../../../Lists/Earring";

function EarringList() {
  return (
    <div className={styles.container}>
      {earrings.map((earring) => (
        <div key={earring.id} className={styles.earring}>
          <div className={styles.photos}>
            <img src={earring.image} alt={earring.description} />
          </div>
          <div className={styles.bottom}>
            <p>{earring.description} </p>
            <p>{earring.price}</p>
            <Button>Sepete Ekle</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EarringList;
