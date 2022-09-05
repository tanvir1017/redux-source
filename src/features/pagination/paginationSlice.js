import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageNumber: 1,
};

// create slice
const paginationByClick = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    paginationNumber: (state, action) => {
      state.pageNumber = action.payload + 1;
    },
  },
});

export default paginationByClick.reducer;
export const { paginationNumber } = paginationByClick.actions;
