

const initialState = {
    name: 'Name',
    message: 'Default message'
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        case 'changeName': {
            // We need to return a new state object
            return {
                // that has all the existing state data
                ...state,
                // but has a new name value
                name: action.payload
            }
        }
        case 'changeMessage': {
            return {
                ...state,
                message: action.payload
            }
        }
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}