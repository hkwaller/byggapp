import {
    REPLACE_UPPDRAG,
} from '../constants/action-types'

const initialState = {}

export default function uppdrag(state = initialState, action) {
    switch (action.type) {
        case REPLACE_UPPDRAG:
            return Object.assign({}, action.value)
        default:
            return state
    }
}