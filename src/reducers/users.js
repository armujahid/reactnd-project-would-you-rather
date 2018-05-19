import { RECEIVE_USERS, ADD_USER_ANSWER } from '../actions/users'

export default function state (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_USER_ANSWER :
      const { authedUser, qid, answer } = action
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    default :
      return state
  }
}
