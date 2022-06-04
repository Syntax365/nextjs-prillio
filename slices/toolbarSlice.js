import { createSlice } from "@reduxjs/toolkit";

const toolbarSlice = createSlice({
  name: "toolbar",
  initialState: {
    isStartPointActive: false,
  },
  reducers: {
    toggleStartPointCTA: (state) => {
      state.isStartPointActive = !state.isStartPointActive;
    },
  },
});

export const { toggleStartPointCTA } = toolbarSlice.actions;

export default toolbarSlice;
