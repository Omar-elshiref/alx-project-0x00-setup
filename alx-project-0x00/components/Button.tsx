import { ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({style, title}) => {
  return (
    <button className={style}>{title}</button>
  )
}

export default Button;
