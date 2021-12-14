import React from "react";
import classes from "./Button.module.css";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  typeOfButton?: "submit" | "button";
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  typeOfButton,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.btn} ${className}`}
      type={typeOfButton}
    >
      {children}
    </button>
  );
};

export default CustomButton;
