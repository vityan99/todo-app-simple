import style from "./todoItem.module.css";
import cn from "classnames";

import Button from "../button/Button";

interface IActions {
  updateTodo: (date: Date) => void;
  removeTodo: (date: Date) => void;
}

interface ITodoItem {
  title: string;
  date: Date;
  done: boolean;
  actions: IActions;
}

function TodoItem({ title, date, done, actions }: ITodoItem) {
  const { updateTodo, removeTodo } = actions;

  return (
    <div className={cn(style["todo-item"])}>
      <div className={cn(style["todo-item__title"], done && style["todo-item__title--cross"])}>{title}</div>
      <div className={cn(style["todo-item__controllers"])}>
        <Button title="Готово" use="primary" clickHandler={() => updateTodo(date)} />
        <Button title="Удалить" use="primary" clickHandler={() => removeTodo(date)} />
      </div>
    </div>
  );
}

export default TodoItem;
