import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationItem extends Component {
    render() {
        return (
            <li className="NavigationItem">
                <Link to={this.props.to}>{this.props.text}</Link>
            </li>
        );
    }
}

export default NavigationItem;
