import { createSlice } from "@reduxjs/toolkit";

const toolbarSlice = createSlice({
  name: "toolbar",
  initialState: {
    isStartPointActive: false,
    isEndPointActive: false,
    selectedAlgorithm: "BFS",
    startPoint: "0,0",
    endPoint: "0,1",
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
    setStartPoint: (state, action) => {
      state.startPoint = action.payload;
    },
    setEndPoint: (state, action) => {
      state.endPoint = action.payload;
    },
  },
});

export const {
  toggleStartPointCTA,
  toggleEndPointCTA,
  selectAlgorithm,
  setStartPoint,
  setEndPoint,
} = toolbarSlice.actions;

export default toolbarSlice;
