import style from "./todoApp.module.css";
import cn from "classnames";

import TodoControllers from "../todoControllers/TodoControllers";
import TodoList from "../todoList/TodoList";

import useTodo from "../../customHooks/useTodo/useTodo";

function TodoApp() {
  const [{ todos, addTodo, updateTodoStatus, removeTodo }] = useTodo([]);

  interface ITodoActions {
    updateTodo: (date: Date) => void;
    removeTodo: (date: Date) => void;
  }

  const todoActions: ITodoActions = {
    updateTodo: updateTodoStatus,
    removeTodo: removeTodo,
  };

  return (
    <div className={cn(style["todo-app"])}>
      <TodoControllers clickHandler={addTodo} />
      <TodoList todos={todos} actions={todoActions} />
    </div>
  );
}

export default TodoApp;
