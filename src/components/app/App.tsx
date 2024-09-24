import style from "./app.module.css";
import cn from "classnames";

import TodoApp from "../todoApp/TodoApp";

function App() {
  return (
    <div className={cn(style.container)}>
      <TodoApp />
    </div>
  );
}

export default App;
