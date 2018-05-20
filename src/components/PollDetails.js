import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { Card, CardHeader,CardBody, CardTitle, FormGroup, Label, Input, Form, Button} from 'reactstrap';
import User from './User'
import { handleSavePollAnswer } from '../actions/shared'

class PollDetails extends PureComponent {
  static propTypes = {
    poll: PropTypes.object,
    pollAuthor: PropTypes.object,
    authedUser: PropTypes.string.isRequired,
    savePollAnswer: PropTypes.func.isRequired
  }

  state = {
    selectedOption: ''
  }

  radioSelected = (e) => {
    this.setState({
      selectedOption: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.savePollAnswer(this.state.selectedOption)
  }

  render() {
    const { poll, pollAuthor, authedUser } = this.props

    if (!poll) {
      return <Redirect to='/404' />
    }

    return (
      <Card>
        <CardHeader>
          <User id={pollAuthor.id}/>
        </CardHeader>
        <CardBody>
          <CardTitle>Would You Rather</CardTitle>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup tag="fieldset">
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" value="optionOne" onChange={this.radioSelected}/>{' '}
                  {poll.optionOne.text}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" value="optionTwo" onChange={this.radioSelected}/>{' '}
                  {poll.optionTwo.text}
                </Label>
              </FormGroup>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

function mapStateToProps ({ polls, users, authedUser }, props) {
  const { id } = props.match.params
  const poll = polls[id]
  const pollAuthor = users[poll.author];
  return {
    poll,
    pollAuthor,
    authedUser
  }
}

function mapDispatchToProps(dispatch, props) {
  const { id } = props.match.params
  return {
    savePollAnswer: (answer) => {
      dispatch(handleSavePollAnswer(id, answer))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollDetails)
