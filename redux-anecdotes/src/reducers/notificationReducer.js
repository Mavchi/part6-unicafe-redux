
const notificationReducer = (state = '', action) => {
    switch(action.type) {
        case 'NEW_MESSAGE':
            return action.message
        default:
            return state
    }
}

export const createNotification = (message) => {
    return {
        type: 'NEW_MESSAGE',
        message: message
    }
}

export default notificationReducer