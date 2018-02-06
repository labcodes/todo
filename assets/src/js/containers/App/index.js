import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      const { user: { username } } = this.props;

      return (
          <Header username={username}/>
      )
    }
}

const mapStateToProps = (state, ownProps) => {  // Receive state from store
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(App);
