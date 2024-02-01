import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      const { videoId, message } = action.payload;

      if (!state[videoId]) {
        state[videoId] = {
          messages: [],
        };
      }

      if (state[videoId].messages.length > 25) state.messages.splice(25, 1);
      state = state[videoId].messages.unshift(message);
    },
  },

  /**
   * Realtime functionality to be implemented by realtime
   * API Polling and handling through extraReducers.
   */
});

export const { addMessage } = chatsSlice.actions;
export default chatsSlice.reducer;
