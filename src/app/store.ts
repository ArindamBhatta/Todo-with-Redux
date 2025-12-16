import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice";
import feedReducer from "../features/feed/feedSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    feed: feedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

