import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux/store";

interface ListState {
  listId: number | null,
  userId: number | null,
  listName: string | null,
  listItems: Array<string>
}

interface ListArray {
  listArray: Array<ListState>
}

const initialState: ListArray = {
  listArray: []
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<ListArray>) => {
      state.listArray = action.payload.listArray
    },
  },
});

export const { setList } = listSlice.actions;

export const selectList = (state: RootState) => state;

export default listSlice.reducer;
