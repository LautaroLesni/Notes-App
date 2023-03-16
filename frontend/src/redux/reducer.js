import { LOG_USER, GET_NOTES, DELETE_NOTE, POST_NOTE, EDIT_NOTE } from "./actions/actions_vars"

const initialState = {
    user: {},
    notes: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_USER:
            return {
                ...state, user: action.payload
            };
        case GET_NOTES:
            return {
                ...state, notes: action.payload
            }
        case DELETE_NOTE:
            console.log(action.payload)
            return {
                ...state, notes: action.payload
            }
        case POST_NOTE:
            console.log(action.payload)
            return {
                ...state, notes: action.payload
            }
        case EDIT_NOTE:
            return{
                ...state, notes: action.payload
            }
        default:
            return state
    }
}

export default rootReducer