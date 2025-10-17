import "./App.css";
import AddTodo from "./component/addTodoForm";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="">
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
