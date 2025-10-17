import { removeTodo, selectTodos } from "../features/todos/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  // Use the specific selector to get the array of todos
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo: any) => {
        return (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        );
      })}
    </div>
  );
};

export default TodoList;
//dispatch - slice
