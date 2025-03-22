import { createSlice } from "@reduxjs/toolkit";

interface PaginationState {
  currentPage: number;
  totalElements: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  totalElements: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState: initialState,
  reducers: {
    increaseCurrentPage(state) {
      state.currentPage++;
    },
    decreaseCurrentPage(state) {
      state.currentPage--;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalElements(state, action) {
      state.totalElements = action.payload;
    },
  },
});

export const paginationActions = paginationSlice.actions;
export default paginationSlice;
