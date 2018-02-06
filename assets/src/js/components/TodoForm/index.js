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
        .then(todo => store.dispatch(addTodo(todo)))
        .catch(response => {debugger;})
    }

    update () {
        const api = new APIService();
        api.updateTodo(this.state)
        .then(response => {debugger;})
        .catch(response => {debugger;})
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
