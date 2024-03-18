import { configureStore } from "@reduxjs/toolkit";
import user from "../reducers/user";
import restaurants from "../reducers/restaurants";
import dishes from "../reducers/dishes";
const store = configureStore({
  reducer: {
    user,
    restaurants,
    dishes,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
