import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';
import PropTypes from 'prop-types';

import AuthService from '../../services/AuthService';
import AlertMessage from '../../components/AlertMessage';
import Header from '../../components/Header';
import Todos from '../../components/Todos';


class App extends React.Component {
  componentWillMount() {
    const auth = new AuthService();
    auth.verifyLoggedUser();
  }

  render() {
    const { user: { name } } = this.props;
    return (
      <div className="container">
        <AlertMessage />
        <Header name={name} />
        {name ?
          <Todos /> :
          <Jumbotron>
            <h1 className="display-3">Hello, Stranger!</h1>
            <p className="lead">Please, login or signup to see your To-Do Lists!</p>
          </Jumbotron>
          }
      </div>
    );
  }
}

App.defaultProps = {
  user: {
    name: '',
  },
};

App.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

/* eslint-disable no-unused-vars */
const mapStateToProps = (state, ownProps) => ({ user: state.user });
/* eslint-disable no-unused-vars */

export default connect(mapStateToProps)(App);
