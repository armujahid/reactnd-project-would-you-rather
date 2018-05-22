export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL = 'ADD_POLL'
export const SAVE_POLL_ANSWER = 'SAVE_POLL_ANSWER'

export function receivePolls (polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  }
}

export function addPoll (poll) {
  return {
    type: ADD_POLL,
    poll,
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

