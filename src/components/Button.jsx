import React from "react";

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button
      type="Button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      //template string
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {" "}
      {text}
    </button>
  );
};

export default Button;
