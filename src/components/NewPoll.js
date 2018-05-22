import React, { PureComponent } from 'react';
import { Card, CardBody, CardTitle, FormGroup, Label, Input, Form, Button, Row, Col} from 'reactstrap';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleAddPoll } from '../actions/shared'


class NewPoll extends PureComponent {
  static propTypes = {
    addPoll: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleOptionOneChange = (e) => {
    e.preventDefault()
    this.setState({
      optionOne : e.target.value
    })
  }

  handleOptionTwoChange = (e) => {
    e.preventDefault()
    this.setState({
      optionTwo : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOne, optionTwo } = this.state
    this.props.addPoll(optionOne, optionTwo)
    const { history } = this.props
    history.push('/')
  }

  render() {
    const { optionOne, optionTwo } = this.state

    return (
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card>
            <CardBody>
              <CardTitle>Would You Rather</CardTitle>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="optionOne">Option One</Label>
                  <Input type="text"
                    name="optionOne"
                    value={optionOne}
                    onChange={this.handleOptionOneChange}
                    placeholder="Option One" />
                </FormGroup>
                <FormGroup>
                  <Label for="optionTwo">Option Two</Label>
                  <Input type="text"
                    name="optionTwo"
                    value={optionTwo}
                    onChange={this.handleOptionTwoChange}
                    placeholder="Option Two" />
                </FormGroup>
                <Button disabled={optionOne === '' || optionTwo === ''}>Submit</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    addPoll: (optionOne, optionTwo) => {
      dispatch(handleAddPoll(optionOne, optionTwo))
    }
  }
}

export default connect(null, mapDispatchToProps)(NewPoll)
