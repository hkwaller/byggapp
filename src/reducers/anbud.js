import {
    FETCH_ANBUD,
} from '../constants/action-types'

const initialState = {
    anbud: [],
}

export default function anbud(state = initialState, action) {
    switch (action.type) {
        case FETCH_ANBUD:
            return {
                ...state,
                anbud: state.anbud.concat(action.payload),
            }
        default:
            return state
    }
}