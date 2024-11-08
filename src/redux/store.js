import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./roomSlice"; // Import roomSlice directly

const store = configureStore({
  reducer: {
    room: roomReducer.room, // Room reducer
    booking: roomReducer.booking, // Booking reducer, referencing the 'booking' slice from roomSlice.js
  },
});

export default store;
