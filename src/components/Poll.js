import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, CardBody, CardTitle} from 'reactstrap';

const Poll = (props) => {
  const { poll } = props;
  return (
    <Card>
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
  poll: PropTypes.object.isRequired
}

function mapStateToProps ({ polls }, { id }) {
  return {
    poll : polls[id]
  }
}

export default connect(mapStateToProps)(Poll)
