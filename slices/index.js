import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import toolbarSlice from "./toolbarSlice";

const rootReducer = combineReducers({
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
