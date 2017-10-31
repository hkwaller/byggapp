import {
    REPLACE_CUSTOMERS,
    DRAFT_CUSTOMER,
} from '../constants/action-types'

const initialState = {}

export default function customers(state = initialState, action) {
    switch (action.type) {
        case REPLACE_CUSTOMERS:
            return Object.assign({}, action.value)
        case DRAFT_CUSTOMER:
            return Object.assign({}, action.value)
        default:
            return state
    }
}