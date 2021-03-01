import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      const id = action.data.id
      return state.map(a => a.id !== id ? a : action.data)
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

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const createVote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.update({ ...anecdote, votes: anecdote.votes+1})
    //console.log(newAnecdote)
    dispatch({
      type: 'VOTE',
      data: newAnecdote
    })
  }
}

export default reducer