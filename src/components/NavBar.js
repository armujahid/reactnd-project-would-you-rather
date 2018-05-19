import React, { PureComponent, Fragment } from 'react';
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
import User from './User'
import { withRouter } from 'react-router-dom'

class NavBar extends PureComponent {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    authedUser: PropTypes.string,
    history: PropTypes.object.isRequired
  }

  state = {
    isOpen: false
  }

  toggle = () =>  {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout = (e) => {
    e.preventDefault()
    const { history, logout} = this.props
    history.push('/')
    logout()
  }

  render() {
    const { authedUser } = this.props;

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">Would You Rather</NavbarBrand>
          { authedUser &&
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
                    <User id={authedUser}/>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={this.logout}>Logout</NavLink>
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
    authedUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(unsetAuthedUser())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
