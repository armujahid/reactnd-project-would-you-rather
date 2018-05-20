import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import PollDetails from './PollDetails'
import LeaderBoard from './LeaderBoard'
import NewPoll from './NewPoll'
import NavBar from './NavBar'
import Login from './Login'
import NotFound from './404Page'
import { handleInitialData } from '../actions/shared'


class App extends PureComponent {
  static propTypes = {
    handleInitialData : PropTypes.func.isRequired,
    notLoggedIn: PropTypes.bool.isRequired
  }
  componentDidMount() {
    this.props.handleInitialData()
  }
  render() {
    const { notLoggedIn } = this.props

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <NavBar/>
          <Container>
            <Switch>
              {
                notLoggedIn ? <Route path='/' exact component={Login} /> :
                <Fragment>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/questions/:id' component={PollDetails} />
                  <Route path='/add' component={NewPoll} />
                  <Route path='/leaderboard' component={LeaderBoard} />
                </Fragment>
              }
              <Route component={NotFound} />
            </Switch>
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

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => {
      dispatch(handleInitialData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
