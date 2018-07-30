import React, { Component } from 'react';

class NavigationItem extends Component {
    render() {
        return (
            <li className="NavigationItem">
                {this.props.text}
            </li>
        );
    }
}

export default NavigationItem;
