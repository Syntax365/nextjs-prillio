import { createSlice } from "@reduxjs/toolkit";

const toolbarSlice = createSlice({
  name: "toolbar",
  initialState: {
    isStartPointActive: false,
    isEndPointActive: false,
  },
  reducers: {
    toggleStartPointCTA: (state) => {
      state.isStartPointActive = !state.isStartPointActive;
    },
    toggleEndPointCTA: (state) => {
      state.isEndPointActive = !state.isEndPointActive;
    },
  },
});

export const { toggleStartPointCTA, toggleEndPointCTA } = toolbarSlice.actions;

export default toolbarSlice;
