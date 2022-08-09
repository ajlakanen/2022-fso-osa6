import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification(state, action) {
      return action.payload.text;
    },
    hideNotification(state, action) {
      if (nextNotificationId - action.payload.id > 1) return state;
      return initialState;
    },
  },
});

let nextNotificationId = 0;

export const setNotification = (text) => {
  return async (dispatch) => {
    const id = nextNotificationId++;
    dispatch(showNotification({ id, text }));
    setTimeout(() => {
      dispatch(hideNotification({ id }));
    }, 2000);
  };
};

export const { showNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
