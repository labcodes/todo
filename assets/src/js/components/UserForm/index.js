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


class UserForm extends React.Component {
    constructor (props) {
        super(props);

        this.LOGIN = 'LOGIN';
        this.SIGNUP = 'SIGNUP';

        this.URLs = {
            LOGIN: 'api/v1.0/users/api-token-auth/',
            SIGNUP: 'api/v1.0/users/signup/',
        }

        this.action = props.action;
        this.successCallback = props.successCallback;

        this.handleSubmit = this.handleSubmit.bind(this);

        this.formData = {
            email: '',
            name: '',
            password: '',
        }

        this.state = {
            emailIsValid: null,
            nameIsValid: null,
            passwordIsValid: null,
            emailError: '',
            nameError: '',
            passwordError: '',
            formError: ''
        };
    }

    handleSubmit (e) {
        axios({
            url: this.URLs[this.action],
            method: 'POST',
            headers: {
              "Content-type": "application/json"
            },
            data: JSON.stringify(this.formData)
        })
        .then((response) => {
            store.dispatch(loginUser({
                email: response.data.user.email,
                name: response.data.user.name,
                token: response.data.token
            }))
            this.successCallback();
        })
        .catch((reason) => {
            this.setErrors(reason.response.data);
        })
        e.preventDefault();
    }

    setErrors(errors) {
        this.setState({
            emailIsValid: !!errors.email ? false : null,
            nameIsValid: !!errors.name ? false : null,
            passwordIsValid: !!errors.password ? false : null,
            emailError: errors.email && errors.email.join(' '),
            nameError: errors.name && errors.name.join(' '),
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
        const nameInput = () => (
            this.action == this.SIGNUP &&
            <FormGroup>
                <Label for="nameInput">Name</Label>
                <Input
                    id="nameInput"
                    name="name"
                    type="text"
                    onChange={(e) => this.formData.name = e.target.value}
                    valid={this.state.nameIsValid}
                />
            <FormFeedback>{this.state.nameError}</FormFeedback>
            </FormGroup>
        )
        return(
            <Form onSubmit={this.handleSubmit}>

                {formError()}

                {nameInput()}

                <FormGroup>
                    <Label for="emailInput">Email</Label>
                    <Input
                        id="emailInput"
                        name="email"
                        type="email"
                        onChange={(e) => this.formData.email = e.target.value}
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
                        onChange={(e) => this.formData.password = e.target.value}
                        valid={this.state.passwordIsValid}
                    />
                    <FormFeedback>{this.state.passwordError}</FormFeedback>
                </FormGroup>

                <Button type="submit">Submit</Button>

            </Form>
        )
    }
};

UserForm.defaultProps = {
    action: UserForm.LOGIN,
    successCallback: () => {},
}

UserForm.propTypes = {
    action: PropTypes.string.isRequired,
    successCallback: PropTypes.func.isRequired,
}

export default UserForm;
