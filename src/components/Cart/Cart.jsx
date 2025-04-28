import { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import styles from "./Cart.module.css";
import { fetchFoodData } from "../../utils";
import { useFetchFoodData } from "../../hooks/useFetchFoodData";
import UserForm from "../UserForm/UserForm";

const Cart = ({ onClose }) => {
  const { cart, handleRemoveFromCart } = useContext(CartContext);
  const { isFetching, error } = useFetchFoodData(fetchFoodData, []);
  const [isProceed, setIsCProceed] = useState(false);
  const handleProceed = () => {
    const cartState = isProceed;
    setIsCProceed(!cartState);
  };
  if (isFetching) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message || "Error Fetching Food Items"}</p>;
  }

  const totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  return (
    <div className={styles.cartOverlay}>
      <div className={styles.cart}>
        <h2 className={styles.title}>Your Cart</h2>
        {cart.length === 0 ? (
          <p className={styles.title}>No items in the cart yet!</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => {
                let price = item.price.toFixed(2);
                return (
                  <li key={item.id} className={styles.cartItem}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.cartImage}
                    />
                    <h3 className={styles.title}>{item.name}</h3>
                    <p className={styles.price}>{price}</p>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
            <h3 className={styles.price}>Total Price: {totalPrice}</h3>
          </>
        )}
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        {cart.length > 0 && (
          <button className={styles.proceedButton} onClick={handleProceed}>Proceed</button>
        )}
      </div>
      {isProceed && <UserForm onClose={handleProceed} onSubmit={handleProceed} />}
    </div>
  );
};

export default Cart;
