import anecdoteService from '../services/anecdotes'

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

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
 }

export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data: data
  }
}

export const createVote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export default reducer