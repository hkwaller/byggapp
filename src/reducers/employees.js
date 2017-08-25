import {
    REPLACE_EMPLOYEES,
} from '../constants/action-types'

const initialState = {}

export default function employees(state = initialState, action) {
    switch (action.type) {
        case REPLACE_EMPLOYEES:
            return Object.assign({}, action.value)
        default:
            return state
    }
}