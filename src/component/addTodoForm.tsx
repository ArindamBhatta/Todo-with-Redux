import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../features/todos/todoSlice";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  // dispatch use  -> reducer -> change in store
  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="flex mt-12">
      <input
        type="text"
        className="w-full rounded-l-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 text-gray-700 dark:text-gray-200 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-r-lg text-lg transition-colors"
      >
        Add Todo
      </button>
    </form>
  );
}
