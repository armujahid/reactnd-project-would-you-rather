import React, { PureComponent } from 'react';
import { Table } from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import User from './User'

class LeaderBoard extends PureComponent {
  static propTypes = {
    table: PropTypes.array.isRequired
  }

  render() {
    const { table } = this.props
    return (
      <Table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Poll Created</th>
            <th>Poll Answered</th>
          </tr>
        </thead>
        <tbody>
          { table.map((user, index) =>
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td><User id={user.id}/></td>
              <td>{user.created}</td>
              <td>{user.answered}</td>
            </tr>)
          }
        </tbody>
      </Table>
    );
  }
}

function mapStateToProps ({ users }) {
  const table = Object.keys(users).map(id => ({
    id,
    created : users[id].questions.length,
    answered: Object.keys(users[id].answers).length

  })).sort((a, b) =>  b.created + b.answered - (a.created + a.answered))
  return {
    table
  }
}

export default connect(mapStateToProps)(LeaderBoard)
