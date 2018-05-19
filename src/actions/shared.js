import { _getUsers, _getQuestions, _saveQuestionAnswer} from '../utils/_DATA'
import { receiveUsers, addUserAnswer } from '../actions/users'
import { receivePolls, savePollAnswer } from '../actions/polls'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return Promise.all([_getUsers(), _getQuestions()])
      .then(([ users, polls ]) => {
        dispatch(receiveUsers(users))
        dispatch(receivePolls(polls))
        dispatch(hideLoading())
      })
  }
}

export function handleSavePollAnswer (qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
    .then(() => {
      dispatch(savePollAnswer(authedUser, qid, answer))
      dispatch(addUserAnswer(authedUser, qid, answer))
    })
    .then(() => dispatch(hideLoading()))
  }
}
