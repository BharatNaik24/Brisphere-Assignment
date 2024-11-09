import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./roomSlice"; // Import the combined reducer

const store = configureStore({
  reducer: rootReducer, // Use the combined reducer
});

export default store;
