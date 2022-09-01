import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux/store";

interface UserState {
  userId: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
}

const initialState: UserState = {
  userId: null,
  firstName: null,
  lastName: null,
  email: null,
  password: null,
};

export const userSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
        state.userId = action.payload.userId
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        state.email = action.payload.email
        state.password = action.payload.password
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state;

export default userSlice.reducer;
