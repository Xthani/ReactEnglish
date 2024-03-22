import React from "react";
import "./styles.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<Props> = ({
  children,
  variant = "primary",
  ...props
}) => {
  const className = `button ${variant}`;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
