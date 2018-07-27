import React, { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import './Infobar.css';

class Infobar extends Component {
    render() {
        console.log(this.props);
        console.log("yo bro");
        return (
            <SnackbarContent aria-describedby="client-snackbar"
                message={
                    <span className="snackbar-message">
                        <ErrorIcon className="snackbar-icon" />
                        {this.props.message}
                    </span>
                }
                className={`snackbar-margin snackbar-${this.props.type}`}
                action={[
                    <IconButton key="close" aria-label="Close" color="inherit" onClick={this.props.onClose}>
                        <CloseIcon className="snackbar-close" />
                    </IconButton>,
                ]}
            />
        );
    }
}

export default Infobar;