import React from 'react';
import {
    Alert,
    Button,
    Form,
    FormFeedback,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

import store from '../../store';
import { loginUser } from '../../actions/user';


class LoginForm extends React.Component {
    constructor (props) {
        super(props);

        this.successCallback = props.successCallback;
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email: '',
            password: '',
            emailIsValid: null,
            passwordIsValid: null,
            emailError: '',
            passwordError: '',
            formError: ''
        };
    }

    handleSubmit (e) {
        axios({
            url: 'api/v1.0/users/api-token-auth/',
            method: 'POST',
            headers: {
              "Content-type": "application/json"
            },
            data: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then((response) => {
            store.dispatch(loginUser({
                username: this.state.email,
                token: response.token
            }))
            this.successCallback();
        })
        .catch((reason) => {
            this.setErrors(reason.response.data);
        })
        e.preventDefault();
    }

    setEmail(email) {
        this.setState({email})
    }

    setPassword(password) {
        this.setState({password})
    }

    setErrors(errors) {
        this.setState({
            emailIsValid: !!errors.email ? false : null,
            passwordIsValid: !!errors.password ? false : null,
            emailError: errors.email && errors.email.join(' '),
            passwordError: errors.password && errors.password.join(' '),
            formError: errors.non_field_errors && errors.non_field_errors.join(' ')
        })
    }

    render() {
        const formError = () => (
            this.state.formError &&
            <Alert color="danger">
              {this.state.formError}
            </Alert>
        )
        return(
            <Form onSubmit={this.handleSubmit}>
                {formError()}
                <FormGroup>
                    <Label for="emailInput">Email</Label>
                    <Input
                        id="emailInput"
                        name="email"
                        type="email"
                        onChange={(e) => this.setEmail(e.target.value)}
                        valid={this.state.emailIsValid}
                    />
                    <FormFeedback>{this.state.emailError}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="passwordInput">Password</Label>
                    <Input
                        id="passwordInput"
                        name="password"
                        type="password"
                        onChange={(e) => this.setPassword(e.target.value)}
                        valid={this.state.passwordIsValid}
                    />
                    <FormFeedback>{this.state.passwordError}</FormFeedback>
                </FormGroup>

                <Button type="submit">Submit</Button>
            </Form>
        )
    }
};

LoginForm.defaultProps = {
    successCallback: () => {},
}

LoginForm.propTypes = {
    successCallback: PropTypes.func.isRequired,
}

export default LoginForm;
