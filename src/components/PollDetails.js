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
    isAnswered: PropTypes.bool.isRequired,
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
    const { poll, pollAuthor, isAnswered} = this.props

    if (!poll) {
      return <Redirect to='/404' />
    }

    const optionOneVotes = poll.optionOne.votes.length;
    const optionTwoVotes = poll.optionTwo.votes.length;
    const percentageOptionOne = optionOneVotes / (optionOneVotes + optionTwoVotes) * 100
    const percentageOptionTwo = optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100

    return (
      <Card>
        <CardHeader>
          <User id={pollAuthor.id}/>
        </CardHeader>
        <CardBody>
          <CardTitle>Would You Rather</CardTitle>
          {isAnswered?
            <ul>
              <li>{poll.optionOne.text} ({optionOneVotes} vote(s) | {percentageOptionOne}%)</li>
              <li>{poll.optionTwo.text} ({optionTwoVotes} vote(s) | {percentageOptionTwo}%)</li>
            </ul>:
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
          }
        </CardBody>
      </Card>
    );
  }
}

function mapStateToProps ({ polls, users, authedUser }, props) {
  const { id } = props.match.params
  const poll = polls[id]
  const pollAuthor = users[poll.author];
  const isAnswered = poll.optionOne.votes.includes(authedUser) ||
    poll.optionTwo.votes.includes(authedUser)
  return {
    poll,
    pollAuthor,
    isAnswered
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
