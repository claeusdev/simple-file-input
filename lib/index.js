import React, { Component } from 'react';

class Input extends Component {
  handleChange(e) {
    this.setState({
      value: e.target.value.split(/(\\|\/)/g).pop()
    });
    if (this.props.onChange) this.props.onChange(e);
  }
  render() {
    const { name, accept, className } = this.props;
    return (
      <section>
        <input
          type="file"
          name={name}
          accept={accept}
          className={className}
          onChange={(e) => this.handleChange(e)}
        />
      </section>
    );
  }
}

export default Input;
