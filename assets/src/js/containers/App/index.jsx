import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';
import PropTypes from 'prop-types';

import AuthService from '../../services/AuthService';
import AlertMessage from '../../containers/AlertMessage';
import Todos from '../../containers/Todos';
import Header from '../../components/Header';


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
    name: PropTypes.string,
  }),
};

const mapStateToProps = (state, ownProps) => ({ user: state.user });

export default connect(mapStateToProps)(App);
