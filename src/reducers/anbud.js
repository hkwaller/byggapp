import {
    REPLACE_ANBUD,
    DRAFT_ANBUD,
} from '../constants/action-types'

const initialState = {}

export default function anbud(state = initialState, action) {
    switch (action.type) {
        case REPLACE_ANBUD:
            return Object.assign({}, action.value)
        case DRAFT_ANBUD:
            return Object.assign({}, action.value)
        default:
            return state
    }
}