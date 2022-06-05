import { createSlice } from "@reduxjs/toolkit";

const gridSlice = createSlice({
  name: "grid",
  initialState: {
    gridDemensions: { rows: 10, columns: 10 },
  },
  reducers: {
    setGridDemensions: (state, action) => {
      state.gridDemensions = action.payload;
    },
  },
});

export const { setGridDemensions } = gridSlice.actions;

export default gridSlice;
