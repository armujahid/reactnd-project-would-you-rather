import { _saveQuestion } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL = 'ADD_POLL'
export const SAVE_POLL_ANSWER = 'SAVE_POLL_ANSWER'

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  }
}

function addPoll (poll) {
  return {
    type: ADD_POLL,
    poll,
  }
}

export function handleAddPoll (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
    .then((formatedPoll) => dispatch(addPoll(formatedPoll)))
    .then(() => dispatch(hideLoading()))
  }
}

export function savePollAnswer (authedUser, qid, answer) {
  return {
    type: SAVE_POLL_ANSWER,
    authedUser,
    qid,
    answer
  }
}

