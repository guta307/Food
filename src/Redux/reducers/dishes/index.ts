import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Dish } from "../../../interfaces";

interface dishState {
  dishes: Dish[];
}

// Step 2: Use the interface to type the initialState
const initialState: dishState = {
  dishes: [],
};

const dishSlice = createSlice({
  initialState,
  name: "dish",
  reducers: {
    listDishes: (
      state: dishState,
      action: PayloadAction<{ dishes: Dish[] }>
    ) => {
      state.dishes = action.payload.dishes;
    },
  },
});

export const { listDishes } = dishSlice.actions;

export default dishSlice.reducer;
