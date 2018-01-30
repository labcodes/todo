import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import store from '../../store';
import { logoutUser } from '../../actions/user';


class LoggedUser extends React.Component {
    constructor(props) {
        super(props);

        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser () {
        store.dispatch(logoutUser())
    }

    render () {
        const {username} = this.props;
        return (
            <div>
                Welcome, {username}! 
                <Button onClick={this.logoutUser}>Logout</Button>
            </div>
        )
    }
}

LoggedUser.defaultProps = {
    username: '',
}

LoggedUser.propTypes = {
    username: PropTypes.string.isRequired,
}

export default LoggedUser;
