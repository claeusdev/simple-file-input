# react-simple-input
Simple file input component for React

# Usage

```js
import FileInput = require('simple-file-input');

<FileInput name="myImage"
   accept=".png,.gif"
   placeholder="My Image"
   className="inputClass"
   onChange={this.handleChange}
 />

```

This components takes a few props by default
### Props

#### name, accept, className, placeholder, onChange

the `name` props take the name of the input, for accesibility, the `accept` takes the file types you want to accept, the `onChange` takes the event you want to run on selected file.


## Todo

- Ship to npm
