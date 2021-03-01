let timer = null

const notificationReducer = (state = '', action) => {
    switch(action.type) {
        case 'NEW_MESSAGE':
            return action.message
        default:
            return state
    }
}

export const createNotification = (message, time) => {
    return async dispatch => {
        dispatch({
            type: 'NEW_MESSAGE',
            message: message
        })
        clearTimeout(timer)
        timer = setTimeout(() => dispatch({
            type: 'NEW_MESSAGE',
            message: ''
        }), time*1000)
    }
}

export default notificationReducer