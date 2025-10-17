import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { Todo } from "./types";

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [{ id: "1", text: "Hello world", completed: false }],
};

//Reducers → modify the state when an action is dispatched (e.g. addTodo, removeTodo).
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    selectTodos: (state) => {
      state.todos;
    },
  },
});

//component use in UI
export const { addTodo, removeTodo } = todoSlice.actions;
//knowledge of reducer
export default todoSlice.reducer;

//Selectors → read/derive state, they don’t change anything. They're usually simple functions that live outside the slice.
export const selectTodos = (state: any) => state.todos.todos;
