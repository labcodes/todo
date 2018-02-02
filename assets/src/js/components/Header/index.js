import React from 'react';
import {
    Button,
    ButtonGroup,
    Navbar,
    NavbarBrand,
    Popover,
    PopoverHeader,
    PopoverBody
} from 'reactstrap';

import LoggedUser from '../LoggedUser';
import UserForm from '../UserForm';


class Header extends React.Component {
    constructor (props) {
        super(props);

        this.toggleLoginPopover = this.toggleLoginPopover.bind(this);
        this.toggleSignupPopover = this.toggleSignupPopover.bind(this);

        this.state = {
            loginPopoverOpen: false,
            signupPopoverOpen: false,
        };
    }

    toggleLoginPopover() {
        this.setState({
            loginPopoverOpen: !this.state.loginPopoverOpen
        });
    }

    toggleSignupPopover() {
        this.setState({
            signupPopoverOpen: !this.state.signupPopoverOpen
        });
    }


    render () {
        const {name} = this.props;
        return (
            <div>
                <Navbar color="faded" light expand="md">
                  <NavbarBrand href="/">To-Do List</NavbarBrand>

                  <div className={!!name ? '' : 'sr-only'}>
                      <LoggedUser username={name || ''}/>
                  </div>

                  <div className={!!name ? 'sr-only' : ''}>
                      <Button onClick={this.toggleLoginPopover} id="LoginButton">Login</Button>
                      {' '}
                      <Button onClick={this.toggleSignupPopover} id="SignupButton">Signup</Button>

                      <Popover
                          placement="bottom"
                          isOpen={this.state.loginPopoverOpen}
                          target="LoginButton"
                          toggle={this.toggleLoginPopover}>
                          <PopoverHeader>Login</PopoverHeader>
                          <PopoverBody>
                              <UserForm action={'LOGIN'} successCallback={this.toggleLoginPopover}/>
                          </PopoverBody>
                      </Popover>

                      <Popover
                          placement="bottom"
                          isOpen={this.state.signupPopoverOpen}
                          target="SignupButton"
                          toggle={this.toggleSignupPopover}>
                          <PopoverHeader>Signup</PopoverHeader>
                          <PopoverBody>
                              <UserForm action={'SIGNUP'} successCallback={this.toggleSignupPopover}/>
                          </PopoverBody>
                      </Popover>
                  </div>

                </Navbar>
            </div>
        )
    }
}

export default Header;
