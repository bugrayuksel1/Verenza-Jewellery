import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCard } from "../../../redux/cardSlice";
import necks from "../../../Lists/Neck";
import styles from "./styles/necklaceList.module.css";
import Button from "../../ui/Button";

function NecklaceList() {
  const dispatch = useDispatch();

  const handleAddToCard = (product) => {
    const quantity = 1;
    dispatch(addToCard({ product, quantity }));
  };

  return (
    <div className={styles.container}>
      {necks.map((neck) => (
        <div key={neck.id} className={styles.neck}>
          <div className={styles.photos}>
            <Link to={`/products/${neck.id}`}>
              <img src={neck.image} alt={neck.description} />
            </Link>
          </div>
          <div className={styles.bottom}>
            <p>{neck.description}</p>
            <p>{neck.price} TL</p>
            <Button onClick={() => handleAddToCard(neck)}>Sepete Ekle</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NecklaceList;
