import { listRestaurants } from "../../services/Restaurants/list";
import { listDishes } from "../../services/Restaurants/listDishes";

export const getData = async () => {
  const result = await listRestaurants();

  if (result.status) {
    return result.response.data;
  }

  return [];
};

export const getDishes = async (restaurantId: number) => {
  const result = await listDishes(restaurantId);

  if (result.status) {
    return result.response.data;
  }

  return [];
};
