import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <ul>
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default Navigation;
