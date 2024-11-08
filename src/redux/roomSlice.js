import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "room",
  initialState: {
    roomsCount: 0, // Changed to roomsCount
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

export const { incrementRoomsCount, decrementRoomsCount } = roomSlice.actions;
export default roomSlice.reducer;
