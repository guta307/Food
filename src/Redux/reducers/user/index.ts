import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  userLogged: {
    name?: string;
    email?: string;
    token?: string;
  };
}

// Step 2: Use the interface to type the initialState
const initialState: UserState = {
  userLogged: {
    name: null,
    email: null,
    token: null,
  },
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    logIn: (
      state: UserState,
      action: PayloadAction<UserState["userLogged"]>
    ) => {
      state.userLogged = action.payload;
    },
    Subscribe: (state: UserState, action: PayloadAction<{ email: string }>) => {
      state.userLogged.email = action.payload.email;
    },
  },
});

export const { logIn, Subscribe } = userSlice.actions;

export default userSlice.reducer;
