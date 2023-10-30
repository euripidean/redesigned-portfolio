import React from "react";
import "./Button.css";

function Button(props) {
  const { className, onClick, type, children } = props;
  return (
    <button className={`button ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
