import React from 'react';
import {
  Button,
  Navbar,
  NavbarBrand,
  Popover,
  PopoverHeader,
  PopoverBody,
} from 'reactstrap';
import PropTypes from 'prop-types';

import LoggedUser from '../LoggedUser';
import UserForm from '../UserForm';


class Header extends React.Component {
  constructor(props) {
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
      loginPopoverOpen: !this.state.loginPopoverOpen,
    });
  }

  toggleSignupPopover() {
    this.setState({
      signupPopoverOpen: !this.state.signupPopoverOpen,
    });
  }


  render() {
    const { name } = this.props;
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">To-Do List</NavbarBrand>

          <div className={name ? '' : 'd-none'}>
            <LoggedUser name={name || ''} />
          </div>

          <div className={name ? 'd-none' : ''}>
            <Button onClick={this.toggleLoginPopover} id="LoginButton">Login</Button>
            {' '}
            <Button onClick={this.toggleSignupPopover} id="SignupButton">Signup</Button>

            <Popover
              placement="bottom"
              isOpen={this.state.loginPopoverOpen}
              target="LoginButton"
              toggle={this.toggleLoginPopover}
            >
              <PopoverHeader>Login</PopoverHeader>
              <PopoverBody>
                <UserForm action="LOGIN" successCallback={this.toggleLoginPopover} />
              </PopoverBody>
            </Popover>

            <Popover
              placement="bottom"
              isOpen={this.state.signupPopoverOpen}
              target="SignupButton"
              toggle={this.toggleSignupPopover}
            >
              <PopoverHeader>Signup</PopoverHeader>
              <PopoverBody>
                <UserForm action="SIGNUP" successCallback={this.toggleSignupPopover} />
              </PopoverBody>
            </Popover>
          </div>

        </Navbar>
      </div>
    );
  }
}

Header.defaultProps = {
  name: '',
};

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
