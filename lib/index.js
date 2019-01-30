import React, { Component } from 'react';

class Input extends Component {
  handleChange(e) {
    this.setState({
      value: e.target.value.split(/(\\|\/)/g).pop()
    });
    if (this.props.onChange) this.props.onChange(e);
  }
  render() {
    return (
      <section>
        <input
          type="file"
          name={this.props.name}
          accept={this.props.accept}
          className={this.props.className}
          onChange={(e) => this.handleChange(e)}
        />
      </section>
    );
  }
}

export default Input;
