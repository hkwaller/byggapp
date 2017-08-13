import * as types from '../constants/action-types'
import firebaseApp from '../firebase'

export function fetchAnbud() {
    return dispatch => {
        firebaseApp.database().ref('/anbud').on('value', snapshot => {
            dispatch({
                type: types.FETCH_ANBUD,
                payload: snapshot.val(),
            })
        })
    }
}