import TodoItem from "../todoItem/TodoItem";

interface ITodo {
  title: string;
  date: Date;
  done: boolean;
}

type TodoListType = ITodo[];

interface IActions {
  updateTodo: (date: Date) => void;
  removeTodo: (date: Date) => void;
}

interface ITodoList {
  todos: TodoListType;
  actions: IActions;
}

function TodoList({ todos, actions }: ITodoList) {
  return (
    <>
      {todos.map(({ title, date, done }, i) => (
        <TodoItem title={title} date={date} done={done} actions={actions} key={i} />
      ))}
    </>
  );
}

export default TodoList;
