import axios from "axios";

export const listRestaurants = async () => {
  try {
    const apiUrl = process.env.API_URL2;
    console.log(apiUrl);
    const response = await axios.get(`${apiUrl}/restaurants`);
    return { status: true, response };
  } catch (error) {
    return { status: false, error };
  }
};
