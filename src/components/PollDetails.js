import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class PollDetails extends PureComponent {
  static propTypes = {
    poll: PropTypes.object
  }

  render() {
    const { poll } = this.props

    if (!poll) {
      return <Redirect to='/404' />
    }

    return (
      <div>Poll Details Page</div>
    );
  }
}

function mapStateToProps ({ polls }, props) {
  const { id } = props.match.params
  const poll = polls[id]
  return {
    poll
  }
}

export default connect(mapStateToProps)(PollDetails)
