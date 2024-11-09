import { createSlice, combineReducers } from "@reduxjs/toolkit";

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
const initialBookingState = {
  name: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  roomsCount: 0,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState: initialBookingState,
  reducers: {
    setBookingDetails: (state, action) => {
      // Populate the booking details state with the payload
      const { name, email, phone, checkIn, checkOut, roomsCount } =
        action.payload;
      state.name = name;
      state.email = email;
      state.phone = phone;
      state.checkIn = checkIn;
      state.checkOut = checkOut;
      state.roomsCount = roomsCount;
    },
  },
});

// Combine reducers
const rootReducer = combineReducers({
  room: roomSlice.reducer,
  booking: bookingSlice.reducer,
});

// Export actions for both slices
export const { incrementRoomsCount, decrementRoomsCount } = roomSlice.actions;
export const { setBookingDetails } = bookingSlice.actions;

// Export the combined reducer
export default rootReducer;
