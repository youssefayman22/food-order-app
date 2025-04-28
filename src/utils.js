export const fetchFoodData = async () => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    if (!response.ok) {
      throw new Error("Failed to fetch food data");
    }
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error("Error fetching food data:", error);
  }
};
