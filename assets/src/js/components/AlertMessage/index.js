import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert, Button } from 'reactstrap';

import store from '../../store';
import { removeAlert } from '../../actions/alert-message';

import './index.scss';


class AlertMessage extends React.Component {
    constructor (props) {
        super(props);

        this.types = {
            SUCCESS: 'success',
            ERROR: 'danger',
            INFO: 'info',
        }

        this.state = {
            type: '',
            message: '',
            className: 'position-absolute z-1000 alert-message invisible'
        }

    }

    componentWillReceiveProps (nextProps) {
        const { type, message } = nextProps.alert;
        const visible = !!type && !!message ? 'visible' : 'invisible';
        this.setState({
            type: this.types[type],
            message: message,
            className: `position-fixed z-1000 alert-message ${visible}`,
        });
    }

    componentDidUpdate (prevProps, prevState) {
        if (!!this.state.type && !!this.state.message) {
            setTimeout(() => {this.dismiss()}, 5000);
        }
    }

    dismiss () {
        store.dispatch(removeAlert());
    }

    render () {
        return (
            <Alert color={this.state.type} className={this.state.className}>
                {this.state.message}
                <Button type="button" className="close ml-10" aria-label="Close" onClick={this.dismiss}>
                    <span aria-hidden="true">&times;</span>
                </Button>
            </Alert>
        )
    }

}

AlertMessage.propTypes = {
    alert: PropTypes.object.isRequired,
}

const mapStateToProps = (state, ownProps) => {
    return {
        alert: state.alert,
    }
}

export default connect(mapStateToProps)(AlertMessage);
