import styles from "./FoodItem.module.css";
import CartContext from "../../store/CartContext";
import { useContext } from "react";

const FoodItem = ({ name, description, price, image, id }) => {
  const { handleAddToCart } = useContext(CartContext);
  const handleCartAdd = () => {
    handleAddToCart({name, description, price, image, id});
  };
  const shortenedDescription = description.slice(0, 100);
  return (
    <div className={styles.foodItem}>
      <img src={image} alt={name} className={styles.foodImage} />
      <h3>{name}</h3>
      <p className={styles.foodContent}>{shortenedDescription}</p>
      <p className={styles.price}>${price.toFixed(2)}</p>
      <button className={styles.addButton} onClick={handleCartAdd}>
        Add to Cart
      </button>
    </div>
  );
};

export default FoodItem;
