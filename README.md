# Simple File Input

Simple file input component for React

# Usage

```js

import React from "react";
import FileInput from "react-simple-input";

const Form = () => {
  const handleChange = (event) => {
    console.log("Selected File", event.target.files[0]);
  };

  return (
    <form>
      <FileInput
        name="myImage"
        accept=".png,.gif"
        placeholder="My Image"
        className="inputClass"
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
```
This components takes a few props by default

### Props

#### name, accept, className, placeholder, onChange

the `name` props take the name of the input, for accesibility, the `accept` takes the file types you want to accept, the `onChange` takes the event you want to run on selected file.

## Todo

- Ship to npm
