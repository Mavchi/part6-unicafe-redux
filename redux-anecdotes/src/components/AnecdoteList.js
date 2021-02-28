import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()
    const sorted_anecdotes = anecdotes.sort((a, b) => b.votes - a.votes)

    const vote = (id) => {
        dispatch(createVote(id))
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