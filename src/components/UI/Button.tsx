import React from "react";
import classes from "./Button.module.css";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  typeOfButton?: "submit" | "button";
}

const Button: React.FC<ButtonProps> = ({ onClick, children, typeOfButton }) => {
  return (
    <button onClick={onClick} className={classes.btn} type={typeOfButton}>
      {children}
    </button>
  );
};

export default Button;
