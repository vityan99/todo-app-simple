import style from "./input.module.css";
import cn from "classnames";

interface IInput {
  value: string;
  onChange: (e: string) => void;
}

function Input({ value, onChange }: IInput) {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return <input className={cn(style.input)} type="text" placeholder="Введите новое дело" onChange={onChangeHandler} value={value} />;
}

export default Input;
