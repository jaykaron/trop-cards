import React, { FC, ButtonHTMLAttributes } from "react";
import style from "./Button.module.css";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button className={style.main} {...props} />
);

export default Button;