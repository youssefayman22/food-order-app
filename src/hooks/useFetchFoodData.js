import { useEffect, useState } from "react";

export const useFetchFoodData = (fetchFn, initialValue) => {
  const [fetchingData, setisFetchingData] = useState(initialValue);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        setIsFetching(true);
      try {
        const result = await fetchFn();
        setisFetchingData(result);
      } catch (error) {
        setError({ message: error.message || "Error Fetching data" });
      }
    };
    fetchData();
    setIsFetching(false);
  }, [fetchFn]);
  return {
    isFetching,
    fetchingData,
    error,
  };
};
