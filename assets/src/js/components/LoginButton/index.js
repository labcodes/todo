import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const LoginButton = ({ loginUser }) => {
    return (<Button onClick={loginUser}>Login</Button>)
}

LoginButton.defaultProps = {
    loginUser: () => {}
}

LoginButton.propTypes = {
    loginUser: PropTypes.func.isRequired
}

export default LoginButton;
