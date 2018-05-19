import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import PollDetails from './PollDetails'
import LeaderBoard from './LeaderBoard'
import NewPoll from './NewPoll'
import NavBar from './NavBar'
import Login from './Login'
import { handleInitialData } from '../actions/shared'


class App extends Component {
  static propTypes = {
    dispatch : PropTypes.func.isRequired,
    notLoggedIn: PropTypes.bool.isRequired
  }
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { notLoggedIn } = this.props

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <NavBar/>
          <Container>
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>
              {
                notLoggedIn ? <Route path='/' component={Login} /> :
                <Fragment>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/questions/:id' component={PollDetails} />
                  <Route path='/add' component={NewPoll} />
                  <Route path='/leaderboard' component={LeaderBoard} />
                </Fragment>
              }
              </Col>
            </Row>
          </Container>
        </Fragment>
      </Router>
    );
  }
}


function mapStateToProps ({ authedUser }) {
  return {
    notLoggedIn: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
