import React from 'react'
import { connect } from 'react-redux'
import { createVote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
    const sorted_anecdotes = props.anecdotes.sort((a, b) => b.votes - a.votes)

    const vote = (id) => {
        props.createVote(props.anecdotes.filter(a => a.id === id)[0])
        props.createNotification(`you voted '${props.anecdotes.filter(a => a.id === id)[0].content}'`, 10)
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

const mapStateToProps = (state) => {
    if(state.filter === ''){
        return {
            anecdotes: state.anecdotes
        }
    }
    const filtered = state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter))
    
    return {
        anecdotes: filtered
    }
}

const mapDispatchToProps = {
    createVote,
    createNotification
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)