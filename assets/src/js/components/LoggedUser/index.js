import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label } from 'reactstrap';

const LoggedUser = ({ username, logoutUser }) => {
    return (
        <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label className="mr-sm-2">Welcome, {username}!</Label>
            </FormGroup>
            <Button onClick={logoutUser}>Logout</Button>
        </Form>
    )
}

LoggedUser.defaultProps = {
    username: '',
    logoutUser: () => {}
}

LoggedUser.propTypes = {
    username: PropTypes.string.isRequired,
    logoutUser: PropTypes.func.isRequired
}

export default LoggedUser;
