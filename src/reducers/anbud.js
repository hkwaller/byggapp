import {
    FETCH_ANBUD,
} from '../constants/action-types'

const initialState = [
    {
        anbud: [],
    },
]

export default function anbud(state = initialState, action) {
    switch (action.type) {
        case FETCH_ANBUD:
            return [
                {
                    anbud: Object.assign(state.anbud, action.anbud),
                },
                ...state,
            ]
        default:
            return state
    }
}