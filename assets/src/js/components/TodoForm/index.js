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
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';
import faSave from '@fortawesome/fontawesome-free-solid/faSave';

import APIService from '../../services/APIService';
import store from '../../store';
import { addTodo, removeTodo } from '../../actions/todo';
import { setAlert } from '../../actions/alert-message';


class TodoForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {id: props.id, name: props.name || '', hasChanged: false};
        this.initialProps = {id: props.id, name: props.name || ''};
        this.isCreation = !props.id;
        this.setName = this.setName.bind(this);
        this.delete = this.delete.bind(this);

        this.api = new APIService();
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
        this.api.createTodo(this.state)
        .then(todo => {
            store.dispatch(addTodo(todo));
            this.handleSuccess('created');
        })
        .catch(response => this.handleError(response))
    }

    update () {
        this.api.updateTodo(this.state)
        .then(response => this.handleSuccess('updated'))
        .catch(response => this.handleError(response))
    }

    delete() {
        this.api.deleteTodo(this.props.id)
        .then(response => {
            store.dispatch(removeTodo(this.props));
            this.handleSuccess('deleted')
        })
        .catch(response => this.handleError(response));
    }

    handleSuccess (action) {
        const success = {
            type: 'SUCCESS',
            message: `ToDo has been ${action} successfully!`
        };
        store.dispatch(setAlert(success));
        this.initialProps.name = this.state.name;
        this.setState({hasChanged: false})
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
        let value = event.target.value;
        this.setState({
            name: value,
            hasChanged: value != this.initialProps.name
        })
    }

    render() {
        const bgClass = this.isCreation ? 'bg-light' : '';
        const saveButton = this.state.hasChanged && (
            <Button type="submit" outline color="primary" className="ml-1">
                <FontAwesomeIcon icon={faSave} />
            </Button>
        );
        const removeButton = !this.isCreation && (
            <Button onClick={this.delete} outline color="danger" className="ml-1">
                <FontAwesomeIcon icon={faTrash} />
            </Button>
        );

        return (
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <Card className={bgClass}>
                    <CardBody>
                        <div className="form-inline">
                            <Input
                                type="text"
                                value={this.state.name}
                                onChange={this.setName}
                                />
                            {saveButton}
                            {removeButton}
                        </div>
                        <CardText></CardText>
                    </CardBody>
                </Card>
            </Form>
        )
    }
};

TodoForm.defaultProps = {
    name: ''
}

TodoForm.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
}

export default TodoForm;
