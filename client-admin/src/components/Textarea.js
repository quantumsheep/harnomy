import React, { Component } from 'react';

class Input extends Component {
  state = {
    active: false
  }

  constructor(props) {
    super(props);

    if (props.value) {
      this.setState({ active: true });
    }
  }

  onFocus = e => {
    this.setState({ active: true });
  }

  onBlur = e => {
    if (!e.target.value) {
      this.setState({ active: false });
    }
  }

  render() {
    const { label, formGroupClass, ...others } = this.props;
    return (
      <div className={"form-group" + (this.state.active ? ' active ' : ' ') + formGroupClass}>
        <label htmlFor={this.props.id}>{label}</label>
        <textarea {...others} onFocus={this.onFocus} onBlur={this.onBlur}></textarea>
      </div>
    );
  }
}

export default Input;
