import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSclice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  // devTools: true is on by default in non-prod
});

// Types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
