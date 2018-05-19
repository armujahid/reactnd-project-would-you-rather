import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import NavBar from './NavBar'
import Login from './Login'
import { handleInitialData } from '../actions/shared'


class App extends Component {
  static propTypes = {
    dispatch : PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Fragment>
        <NavBar></NavBar>
        <Container>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}><Login/></Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default connect()(App)
