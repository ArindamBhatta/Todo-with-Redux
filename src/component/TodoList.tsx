import { removeTodo, selectTodos } from "../features/todos/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import type { Todo } from "../features/todos/types";

const TodoList = () => {
  // Use the specific selector to get the array of todos
  const todos: Todo[] = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <div className="m-6">
      <ul className="space-y-3">
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-[1.02]"
            >
              <span className="text-gray-800 dark:text-gray-200">
                {todo.text}
              </span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 hover:text-red-700 font-bold transition-colors"
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
//dispatch - slice
