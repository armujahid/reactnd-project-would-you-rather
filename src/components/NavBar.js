import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { unsetAuthedUser } from '../actions/authedUser'

class NavBar extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    isloggedIn: PropTypes.bool.isRequired
  }

  state = {
    isOpen: false
  }

  toggle = () =>  {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isloggedIn } = this.props;

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">Would You Rather</NavbarBrand>
          { isloggedIn &&
            <Fragment>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink tag={Link} to="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/leaderboard">Leader Board</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/add">Add Poll</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={this.props.logout}>Logout</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Fragment>
          }
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    isloggedIn: authedUser !== null
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(unsetAuthedUser())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
