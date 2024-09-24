import { useState } from "react";
import style from "./todoControllers.module.css";
import cn from "classnames";

import Input from "../input/Input";
import Button from "../button/Button";

interface ITodoControllers {
  clickHandler: (todo: ITodo) => void;
}

interface ITodo {
  title: string;
  date: Date;
  done: boolean;
}

function TodoControllers({ clickHandler }: ITodoControllers) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (inputValue.length === 0) {
      return;
    }

    clickHandler({
      title: inputValue,
      date: new Date(),
      done: false,
    });

    setInputValue("");
  };

  return (
    <div className={cn(style["todo-controllers"])}>
      <Input value={inputValue} onChange={setInputValue} />
      <Button title="Добавить дело" use="primary" clickHandler={handleSubmit} />
    </div>
  );
}

export default TodoControllers;
