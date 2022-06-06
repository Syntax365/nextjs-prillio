import { createSlice } from "@reduxjs/toolkit";

const toolbarSlice = createSlice({
  name: "toolbar",
  initialState: {
    isWallsActive: false,
    isStartPointActive: false,
    isEndPointActive: false,
    selectedAlgorithm: "BFS",
    startPoint: "0,0",
    endPoint: "0,1",
  },
  reducers: {
    toggleAddWallsCTA: (state) => {
      state.isWallsActive = !state.isWallsActive;
    },
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
  toggleAddWallsCTA,
} = toolbarSlice.actions;

export default toolbarSlice;
