import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';

import AuthService from '../../services/AuthService';
import store from '../../store';
import { loginUser } from '../../actions/user';
import AlertMessage from '../../components/AlertMessage';
import Header from '../../components/Header';
import Todos from '../../components/Todos';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount () {
        const auth = new AuthService();
        const user = auth.getLoggedUser();
        if (user) {
            store.dispatch(loginUser(user));
        }
    }

    render() {
        const { user: { name } } = this.props;
        return (
            <div className="container">
                <AlertMessage />
                <Header name={name}/>
                {!!name ?
                    <Todos /> :
                    <Jumbotron>
                        <h1 className="display-3">Hello, Stranger!</h1>
                        <p className="lead">Please, login or signup to see your To-Do Lists!</p>
                    </Jumbotron>
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(App);
