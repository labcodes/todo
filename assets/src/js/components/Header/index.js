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
import LoginForm from '../LoginForm';


class Header extends React.Component {
    constructor (props) {
        super(props);

        this.toggleLoginPopover = this.toggleLoginPopover.bind(this);

        this.state = {
            loginPopoverOpen: false,
        };
    }

    toggleLoginPopover() {
        this.setState({
            loginPopoverOpen: !this.state.loginPopoverOpen
        });
    }


    render () {
        const {username} = this.props;
        return (
            <div>
                <Navbar color="faded" light expand="md">
                  <NavbarBrand href="/">To-Do List</NavbarBrand>

                  <div className={!!username ? '' : 'sr-only'}>
                      <LoggedUser username={username}/>
                  </div>

                  <div className={!!username ? 'sr-only' : ''}>
                      <ButtonGroup>
                          <Button onClick={this.toggleLoginPopover} id="LoginPopover">Login</Button>
                      </ButtonGroup>
                      <Popover
                          placement="bottom"
                          isOpen={this.state.loginPopoverOpen}
                          target="LoginPopover"
                          toggle={this.toggleLoginPopover}>
                          <PopoverHeader>Login</PopoverHeader>
                          <PopoverBody>
                              <LoginForm successCallback={this.toggleLoginPopover}/>
                          </PopoverBody>
                      </Popover>
                  </div>

                </Navbar>
            </div>
        )
    }
}

export default Header;
