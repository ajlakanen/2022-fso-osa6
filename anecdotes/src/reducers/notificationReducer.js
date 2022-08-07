import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification(state, action) {
      console.log("show notif action payload: ", action);
      return action.payload.text;
    },
    hideNotification(state, action) {
      if (nextNotificationId - action.payload.id > 1) return state;
      return initialState;
    },
  },
});

let nextNotificationId = 0;
export const showNotificationWithTimeOut = ({ dispatch, text }) => {
  const id = nextNotificationId++;
  dispatch(showNotification({ id, text }));
  setTimeout(() => {
    dispatch(hideNotification({ id }));
  }, 2000);
};

export const { showNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
