import React, { useState } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { addTodo } from "../todoSlice";

export default function AddTodoForm() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text.trim()));
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}
