import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';


import AuthService from '../../services/AuthService';


const LoggedUser = ({ name }) => {
    const handleClick = () => {
        const service = new AuthService();
        service.logoutUser();
    }

    return (
        <div>
            Welcome, {name}!
            <Button onClick={handleClick}>Logout</Button>
        </div>
    )
}

LoggedUser.defaultProps = {
    name: '',
}

LoggedUser.propTypes = {
    name: PropTypes.string.isRequired,
}

export default LoggedUser;
