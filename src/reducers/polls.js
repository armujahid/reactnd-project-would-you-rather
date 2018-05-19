import { RECEIVE_POLLS, ADD_POLL, SAVE_POLL_ANSWER } from '../actions/polls'

export default function tweets (state = {}, action) {
  switch(action.type) {
    case RECEIVE_POLLS :
      return {
        ...state,
        ...action.polls
      }
    case ADD_POLL :
      const { poll } = action
      return {
        ...state,
        [poll.id]: poll
      }
    case SAVE_POLL_ANSWER :
      const { authedUser, qid, answer } = action
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
    default :
      return state
  }
}
