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
    const { label, ...others } = this.props;
    return (
      <div className="form-group">
        <input {...others} onFocus={this.onFocus} onBlur={this.onBlur} />
        <label className={this.state.active ? 'active' : ''} htmlFor={this.props.id}>{label}</label>
      </div>
    );
  }
}

export default Input;
