import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './NavBar'
import Login from './Login'

class App extends Component {
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

export default App;
