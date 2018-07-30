import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div className="bg-white shadow h-full w-64">
                <ul className="list-reset">
                    {this.props.children}
                </ul>
            </div>
        );
    }
}

export default Navigation;
