import style from "./button.module.css";
import cn from "classnames";

interface IButton {
  title: string;
  use: string;
  clickHandler: () => void;
}

function Button({ title, use, clickHandler }: IButton) {
  return (
    <button className={cn(style.btn, style[`btn--${use}`])} onClick={clickHandler}>
      {title}
    </button>
  );
}
export default Button;
