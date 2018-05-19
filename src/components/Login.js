import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    setAuthedUser: PropTypes.func.isRequired
  }
  state = {
    userId : ''
  }

  onUserChange = (userId) => { this.setState({ userId })}

  onLogin = () => {
    const { userId } = this.state;
    const { setAuthedUser } = this.props;
    if (userId) {
      setAuthedUser(userId);
    }
  }

  render() {
    const { users } = this.props;
    return (
      <Form>
        <FormGroup>
          <Label for="userSelect">Select User</Label>
          <Input type="select" name="select" onChange={(event) => this.onUserChange(event.target.value)}>
          {
            Object.keys(users).map(user =>
            <option key={user} value={user}>
              {users[user].name}
            </option>)
          }
          </Input>
        </FormGroup>
        <Button onClick={this.onLogin}>Login</Button>
      </Form>
    );
  }
}

function mapStateToProps ({ users }) {
  return {
    users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setAuthedUser: (id) => {
      dispatch(setAuthedUser(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
