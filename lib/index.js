import React, { Component } from 'react';


export const SimpleFileInput = ({ onChange, name, accept, className }) => {
  const [value, setValue] = React.useState("")
  const handleChange = (e) => {
    setValue(e.target.value.split(/(\\|\/)/g).pop());
    if(onChange) onChange()
  }

  return (
      <input
        type="file"
        style={{
          display: 'inline-block',
          background: '#eaeff2',
          borderRadius: '4px',
          boxShadow: 'inset 0 -1px #bbbfc2',
          color: '#4d4353',
          padding: '0.3em 0.8em'
        }}
        name={name}
        accept={accept}
        className={className}
        onChange={handleChange}
      />
  );
}


