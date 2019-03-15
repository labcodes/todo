import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import APIService from '../../services/APIService';
import store from '../../store';
import { addTodos } from '../../actions/todo';
import TodoForm from '../../components/TodoForm';


class Todos extends React.Component {
  componentWillMount() {
    const api = new APIService();
    api.listTodos().then(todos => store.dispatch(addTodos(todos)));
  }

  render() {
    const colClass = 'col-xs-12 col-md-4 mb-3';
    return (
      <div className="row">
        <div className={colClass}><TodoForm /></div>
        {this.props.todos.map(todo => (
          <div className={colClass} key={todo.id}>
            <TodoForm id={todo.id} name={todo.name} />
          </div>
        ))}
      </div>
    );
  }
}

Todos.defaultProps = {
  todos: [],
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
};

const mapStateToProps = (state, ownProps) => ({ todos: state.todo });

export default connect(mapStateToProps)(Todos);
