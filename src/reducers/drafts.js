import {
    REPLACE_DRAFTS,
} from '../constants/action-types'

const initialState = {}

export default function uppdrag(state = initialState, action) {
    switch (action.type) {
        case REPLACE_DRAFTS:
            return Object.assign({}, action.value)
        default:
            return state
    }
}