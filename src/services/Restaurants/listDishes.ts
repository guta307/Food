import axios from "axios";

export const listDishes = async (restaurantId: number) => {
  try {
    const apiUrl = process.env.API_URL2;
    const params = { restaurantId };
    const response = await axios.get(`${apiUrl}/dishes`, { params });
    return { status: true, response };
  } catch (error) {
    return { status: false, error };
  }
};
