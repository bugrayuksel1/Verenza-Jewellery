import styles from "./styles/necklaceList.module.css";
import necks from "../../../Lists/Neck";
import Button from "../../ui/Button";

function NecklaceList() {
  return (
    <div className={styles.container}>
      {necks.map((neck) => (
        <div key={neck.id} className={styles.neck}>
          <div className={styles.photos}>
            <img src={neck.image} alt={neck.description} />
          </div>
          <div className={styles.bottom}>
            <p>{neck.description}</p>
            <p>{neck.price} </p>
            <Button>Sepete Ekle</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NecklaceList;
