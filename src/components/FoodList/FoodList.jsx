import { useFetchFoodData } from "../../hooks/useFetchFoodData";
import { fetchFoodData } from "../../utils";
import FoodItem from "../FoodItem/FoodItem";
import styles from "./FoodList.module.css";
const FoodList = () => {
  const {
    isFetching,
    fetchingData: foodItems,
    error,
  } = useFetchFoodData(fetchFoodData, []);

  if (isFetching) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error.message || "Error Fetching Food Items"}</p>;
  }

  return (
    <section className={styles.foodList}>
      {foodItems.map((foodItem) => {
        let price = (Math.random() * 20 + 5);
        return (
          <FoodItem
          key={foodItem.idMeal}
            name={foodItem.strMeal}
            description={foodItem.strInstructions}
            price={price}
            image={foodItem.strMealThumb}
            id={foodItem.idMeal}
          />
        );
      })}
    </section>
  );
};

export default FoodList;
