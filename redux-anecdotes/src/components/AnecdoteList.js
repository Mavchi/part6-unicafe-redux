import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createVote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        const filter = state.filter
        const anecdotes = state.anecdotes
        
        if (filter === ''){
            return anecdotes
        }
        return anecdotes.filter(a => a.content.toLowerCase().includes(filter))
    })
    const sorted_anecdotes = anecdotes.sort((a, b) => b.votes - a.votes)

    const vote = (id) => {
        dispatch(createVote(anecdotes.filter(a => a.id === id)[0]))
        dispatch(createNotification(`you voted '${anecdotes.filter(a => a.id === id)[0].content}'`, 10))
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