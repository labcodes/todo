import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Button,
    Form,
    Input
} from 'reactstrap';

import APIService from '../../services/APIService';
import store from '../../store';
import { addTodo } from '../../actions/todo';
import { setAlert } from '../../actions/alert-message';


class TodoForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {id: props.id, name: props.name || ''};
        this.setName = this.setName.bind(this);
    }

    handleSubmit (e) {
        if (this.state.id) {
            this.update();
        } else {
            this.create();
            this.setState({name: ''});
        }
        e.preventDefault();
    }

    create () {
        const api = new APIService();
        api.createTodo(this.state)
        .then(todo => {
            store.dispatch(addTodo(todo));
            this.handleSuccess();
        })
        .catch(response => this.handleError(response))
    }

    update () {
        const api = new APIService();
        api.updateTodo(this.state)
        .then(response => this.handleSuccess())
        .catch(response => this.handleError(response))
    }

    handleSuccess () {
        const success = {
            type: 'SUCCESS',
            message: 'ToDo has been saved successfully!'
        };
        store.dispatch(setAlert(success));
    }

    handleError (error) {
        store.dispatch(setAlert({
            type: 'ERROR',
            message: this.formatError(error)
        }));
    }

    formatError (error) {
        let messages = [];
        Object.keys(error).forEach((key, index) => {
            let name = key.charAt(0).toUpperCase() + key.slice(1);
            let message = error[key].join(' ');
            messages.push(`${name}: ${message}`)
        });
        return messages.join('<br />');
    }

    setName (event) {
        this.setState({name: event.target.value})
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <Card>
                    <CardBody>
                        <CardTitle>
                            <Input
                                type="text"
                                value={this.state.name}
                                onChange={this.setName}
                                />
                        </CardTitle>
                        <CardText></CardText>
                        <Button type="submit">Save</Button>
                    </CardBody>
                </Card>
            </Form>
        )
    }
};

TodoForm.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
}

export default TodoForm;
