import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class User extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }

  render() {
    const { user } = this.props;
    if (!user) {
      return null
    }
    return (
      <Fragment>
        <span>{user.name}</span>
        <img src={user.avatarURL} className='avatar'/>
      </Fragment>
    );
  }
}

function mapStateToProps ({ users }, { id }) {
  return {
    user : users[id]
  }
}


export default connect(mapStateToProps)(User)
