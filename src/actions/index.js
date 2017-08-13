import * as types from '../constants/action-types'
import firebaseApp from '../firebase'

export function fetchAnbud() {
    return dispatch => {
        firebaseApp.on('value', snapshot => {
            dispatch({
                type: types.FETCH_ANBUD,
                payload: snapshot.val(),
            })
        })
    }
}