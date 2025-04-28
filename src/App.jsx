import FoodList from "./components/FoodList/FoodList";
import Header from "./components/Header/Header";
import { CartProvider } from "./store/CartContext";

function App() {
  return (
    <CartProvider>
    <Header />
    <main>
      <FoodList/>
    </main>
    </CartProvider>
  );
}

export default App;
