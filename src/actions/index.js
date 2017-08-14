import * as types from '../constants/action-types'
import firebaseApp from '../firebase'

export function listenToAnbudChanges() {
    return (dispatch, getState) => {
        firebaseApp.database().ref('/anbud').on('value', snapshot => {
            dispatch(replaceAnbud(snapshot.val()))
        })
    }
}

export function replaceAnbud(payload) {
    return {
        type: types.REPLACE_ANBUD,
        value: payload,
    }
}