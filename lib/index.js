import React, { useState } from "react";

export const SimpleFileInput = ({ name, accept, className, onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const input = e.target.value.split(/(\\|\/)/g).pop();

    setValue(input);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <input
      type="file"
      style={{
        display: "inline-block",
        background: "#eaeff2",
        borderRadius: "4px",
        boxShadow: "inset 0 -1px #bbbfc2",
        color: "#4d4353",
        padding: "0.3em 0.8em",
      }}
      name={name}
      accept={accept}
      value={value}
      className={className}
      onChange={handleChange}
    />
  );
};

