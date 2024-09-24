import { useState } from "react";

interface todo {
  title: string;
  date: Date;
  done: boolean;
}

type TodosType = todo[];

interface IUseTodo {
  todos: TodosType;
  addTodo: (todo: todo) => void;
  updateTodoStatus: (date: Date) => void;
  removeTodo: (date: Date) => void;
}

type UseToDoReturnType = IUseTodo[];

const useTodo = (initialState: []): UseToDoReturnType => {
  const [todos, setTodos] = useState<TodosType>(initialState);

  const addTodo = (todo: todo): void => setTodos((current) => [...current, todo]);

  const updateTodoStatus = (date: Date): void => {
    setTodos((current) =>
      current.map((todo) => {
        if (todo.date === date) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  };

  const removeTodo = (date: Date): void => setTodos((current) => current.filter((todo) => todo.date !== date));

  return [{ todos, addTodo, updateTodoStatus, removeTodo }];
};

export default useTodo;
