import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import toolbarSlice from "./toolbarSlice";
import gridSlice from "./gridSlice";

const rootReducer = combineReducers({
  grid: gridSlice.reducer,
  toolbar: toolbarSlice.reducer,
  // any other reducers here
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [],
      ignoredPaths: [],
    },
  }),
});
