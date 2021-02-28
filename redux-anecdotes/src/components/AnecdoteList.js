import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createVote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()
    const sorted_anecdotes = anecdotes.sort((a, b) => b.votes - a.votes)

    const vote = (id) => {
        dispatch(createVote(id))
        dispatch(createNotification(`you voted '${anecdotes.filter(a => a.id === id)[0].content}'`))
        setTimeout(() => dispatch(createNotification('')), 5000)
    }

    return (
        <div>
            {sorted_anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList