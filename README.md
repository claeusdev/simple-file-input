# react-simple-input
Simple file input component for React

# Usage

```js
var React = require('react'),
  FileInput = require('react-file-input');

var Form = React.createClass({
  handleChange: function(event) {
    console.log('Selected file:', event.target.files[0]);
  },

  render: function() {
    return (
      <form>
        <FileInput name="myImage"
                   accept=".png,.gif"
                   placeholder="My Image"
                   className="inputClass"
                   onChange={this.handleChange} />
      </form>
    );
  },
});

```

This components takes a few props by default
### Props

#### name, accept, className, placeholder, onChange

the `name` props take the name of the input, for accesibility, the `accept` takes the file types you want to accept, the `onChange` takes the event you want to run on selected file.


## Todo

- Ship to npm
