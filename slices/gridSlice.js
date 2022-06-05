import { createSlice } from "@reduxjs/toolkit";

const gridSlice = createSlice({
  name: "grid",
  initialState: {
    gridSize: [0, 0],
  },
  reducers: {
    setGridSize: (state, action) => {
      state.gridSize = action.payload;
    },
  },
});

export const { setGridSize } = gridSlice.actions;

export default gridSlice;
