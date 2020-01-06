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
          onChange={(e) => this.handleChange(e)}
        />
    );
  }
}

export default Input;
