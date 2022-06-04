import { createSlice } from "@reduxjs/toolkit";

const toolbarSlice = createSlice({
  name: "toolbar",
  initialState: {
    isStartPointActive: false,
    isEndPointActive: false,
    selectedAlgorithm: "Linear Search",
  },
  reducers: {
    toggleStartPointCTA: (state) => {
      state.isStartPointActive = !state.isStartPointActive;
    },
    toggleEndPointCTA: (state) => {
      state.isEndPointActive = !state.isEndPointActive;
    },
    selectAlgorithm: (state, action) => {
      state.selectedAlgorithm = action.payload;
    },
  },
});

export const { toggleStartPointCTA, toggleEndPointCTA, selectAlgorithm } =
  toolbarSlice.actions;

export default toolbarSlice;
