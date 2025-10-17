import React from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { toggleTodo } from "../todoSlice";

export default function TodoList() {
  const todos = useAppSelector((s) => s.todos.list);
  const dispatch = useAppDispatch();

  if (todos.length === 0) return <p>No todos yet</p>;

  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id}>
          <span
            onClick={() => dispatch(toggleTodo(t.id))}
            style={{ textDecoration: t.completed ? "line-through" : "none" }}
          >
            {t.text}
          </span>
          {/* <button onClick={() => dispatch(removeTodo(t.id))}>Delete</button> */}
        </li>
      ))}
    </ul>
  );
}
