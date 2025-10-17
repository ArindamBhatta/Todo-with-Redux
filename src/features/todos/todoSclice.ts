import { nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "./types";

interface TodoState {
  list: Todo[];
}

const initialState: TodoState = { list: [] };

const todoSclice = {
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<string>) => {
      state.list.push({ id: nanoid(), text: action.payload, completed: false });
    },
    toggleTodo: (state: TodoState, action: PayloadAction<string>) => {},
  },
};

export const { addTodo, toggleTodo } = todoSclice.action;

export default todoSclice.reducer;
