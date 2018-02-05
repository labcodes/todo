import React from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'reactstrap';

import Header from '../../components/Header';
import Todos from '../../components/Todos';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    isAuthenticated () {
        return this.props.user && !!this.props.user.token;
    }

    render() {
        const { user: { name }, todos } = this.props;
        return (
            <div>
                <Header name={name}/>
                {this.isAuthenticated() ?
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
