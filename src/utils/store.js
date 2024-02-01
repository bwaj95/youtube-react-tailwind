import { configureStore } from "@reduxjs/toolkit";

import AppReducer from "./appSlice";
import SearchReducer from "./searchSlice";
import ChatsReducer from "./chatsSlice";

const store = configureStore({
  reducer: {
    app: AppReducer,
    search: SearchReducer,
    chats: ChatsReducer,
  },
});

export default store;
