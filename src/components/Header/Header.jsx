import logo from "../../assets/logo.jpg";
import cartIcon from "../../assets/cartIcon.png";
import styles from "./Header.module.css";
import { useState } from "react";
import Cart from "../Cart/Cart";
const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartToggle = () => {
    const cartState = isCartOpen;
    setIsCartOpen(!cartState);
  };
  
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="Food Order App" />
        <div className={styles.titleContainer}>
          <h1>Food Order App</h1>
          <button className={styles.cartButton} onClick={handleCartToggle}>
            <img src={cartIcon} alt="Cart" />
          </button>
        </div>
      </header>
      {isCartOpen && <Cart onClose={handleCartToggle} />}
    </>
  );
};

export default Header;
