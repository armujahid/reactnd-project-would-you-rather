import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, CardBody, CardTitle} from 'reactstrap';
import { withRouter } from 'react-router-dom'

const Poll = (props) => {
  const loadDetails = (e ,id) => {
    e.preventDefault()
    props.history.push(`/questions/${id}`)
  }
  const { poll } = props;
  return (
    <Card onClick={(e) => loadDetails(e, poll.id)}>
      <CardBody>
        <CardTitle>Would You Rather</CardTitle>
        <ul>
          <li>{poll.optionOne.text}</li>
          <li>{poll.optionTwo.text}</li>
        </ul>
      </CardBody>
    </Card>
  )
}

Poll.propTypes = {
  id: PropTypes.string.isRequired,
  poll: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

function mapStateToProps ({ polls }, { id }) {
  return {
    poll : polls[id]
  }
}

export default withRouter(connect(mapStateToProps)(Poll))
