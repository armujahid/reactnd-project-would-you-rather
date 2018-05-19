import React, { Component, Fragment } from 'react';
import NavBar from './NavBar'

class DashBoard extends Component {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <div>Home Page</div>
      </Fragment>
    );
  }
}

export default DashBoard
