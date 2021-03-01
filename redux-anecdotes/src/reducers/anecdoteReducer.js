const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      const id = action.data.id
      const anecdote = state.find(a => a.id === id)
      const changed_anecdote = { ...anecdote }
      changed_anecdote.votes += 1

      return state.map(a => a.id !== id ? a : changed_anecdote)
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    default:
      return state
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content: content,
      votes: 0
    }
  }
}

export const createVote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export default reducer