import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import APIService from '../../services/APIService';
import store from '../../store';
import { addTodos } from '../../actions/todo';


class Todos extends React.Component {

    componentWillMount() {
        const api =  new APIService();
        const todos = api.get(api.TODO_LIST_URL)
        .then(todos => store.dispatch(addTodos(todos)))
    }

    render () {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => (
                        <li key={todo.id}> id={todo.id} name={todo.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

Todos.defaultProps = {
    todos: [],
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todo
    }
}

export default connect(mapStateToProps)(Todos);
