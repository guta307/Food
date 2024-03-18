import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "../../../interfaces";

interface restaurantState {
  restaurants: Restaurant[];
}

// Step 2: Use the interface to type the initialState
const initialState: restaurantState = {
  restaurants: [],
};

const restaurantSlice = createSlice({
  initialState,
  name: "restaurant",
  reducers: {
    list: (
      state: restaurantState,
      action: PayloadAction<{ restaurants: Restaurant[] }>
    ) => {
      state.restaurants = action.payload.restaurants;
    },
  },
});

export const { list } = restaurantSlice.actions;

export default restaurantSlice.reducer;
