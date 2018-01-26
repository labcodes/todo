import React from 'react';
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

import { logoutUser } from '../../actions/user';
import { loginUser } from '../../actions/user';

import store from '../../store';

import LoggedUser from '../LoggedUser';
import LoginButton from '../LoginButton';


class Header extends React.Component {
    constructor (props) {
        super(props);
    }

    logoutUser () {
        store.dispatch(logoutUser())
    }

    loginUser () {
        // api
        store.dispatch(
            loginUser({username: 'username', token: 'token'})
        )
    }

    render () {
        const {username} = this.props;
        return (
            <div>
                <Navbar color="faded" light expand="md">
                  <NavbarBrand href="/">To-Do List</NavbarBrand>
                  {username ?
                      <LoggedUser logoutUser={this.logoutUser} username={username}/> :
                      <LoginButton loginUser={this.loginUser.bind(this)}/>
                  }
                </Navbar>
            </div>
        )
    }
}

export default Header;
