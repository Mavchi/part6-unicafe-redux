const filterReducer = (state='', action) => {
    switch(action.type) {
        case 'CHANGE_FILTER':
            return action.filter
        default:
            return state
    }
}

export const createFilter = (filter) => {
    return {
        type: 'CHANGE_FILTER',
        filter: filter
    }
}

export default filterReducer