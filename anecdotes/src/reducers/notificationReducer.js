import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification(state, action) {
      setTimeout(() => {
        console.log("1");
        hideNotification(state, action);
      }, 2000);
      return action.payload;
    },
    hideNotification(state, action) {
      console.log("2");

      return "";
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
