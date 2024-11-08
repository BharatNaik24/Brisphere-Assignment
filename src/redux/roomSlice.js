// src/redux/roomSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Room slice (for managing the number of rooms selected)
const roomSlice = createSlice({
  name: "room",
  initialState: {
    roomsCount: 0, // Initial room count
  },
  reducers: {
    incrementRoomsCount: (state) => {
      state.roomsCount += 1; // Increment the room count
    },
    decrementRoomsCount: (state) => {
      if (state.roomsCount > 0) {
        state.roomsCount -= 1; // Decrement the room count
      }
    },
  },
});

// Booking slice (for managing the booking details like check-in, check-out, and rooms count)
const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    checkIn: "",
    checkOut: "",
    roomsCount: 0,
  },
  reducers: {
    setBookingDetails: (state, action) => {
      const { checkIn, checkOut, roomsCount } = action.payload;
      state.checkIn = checkIn;
      state.checkOut = checkOut;
      state.roomsCount = roomsCount;
    },
  },
});

// Export actions for both slices
export const { incrementRoomsCount, decrementRoomsCount } = roomSlice.actions;
export const { setBookingDetails } = bookingSlice.actions;

// Export reducers for both slices
export default {
  room: roomSlice.reducer,
  booking: bookingSlice.reducer,
};
