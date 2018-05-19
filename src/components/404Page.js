import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <div>404 Not Found</div>
        <NavLink to="/">Click here </NavLink> to go back to home page
      </Fragment>
    );
  }
}

export default NotFound
