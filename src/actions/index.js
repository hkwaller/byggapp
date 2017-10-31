import * as types from '../constants/action-types'
import firebaseApp from '../firebase'

export function listenToChanges() {
    return dispatch => {
        dispatch(listenToAnbudChanges())
        dispatch(listenToEmployeesChanges())
        dispatch(listenToCustomersChanges())
        dispatch(listenToUppdragChanges())
        dispatch(listenToDraftChanges())
    }
}

export function listenToAnbudChanges() {
    return dispatch => {
        firebaseApp.database().ref('/anbud').on('value', snapshot => {
            dispatch(replaceAnbud(snapshot.val()))
        })
    }
}

export function listenToDraftChanges() {
    return dispatch => {
        firebaseApp.database().ref('/drafts').on('value', snapshot => {
            dispatch(replaceDrafts(snapshot.val()))
        })
    }
}

export function listenToUppdragChanges() {
    return dispatch => {
        firebaseApp.database().ref('/uppdrag').on('value', snapshot => {
            dispatch(replaceUppdrag(snapshot.val()))
        })
    }
}

export function listenToCustomersChanges() {
    return dispatch => {
        firebaseApp.database().ref('/customers').on('value', snapshot => {
            dispatch(replaceCustomers(snapshot.val()))
        })
    }
}

export function listenToEmployeesChanges() {
    return dispatch => {
        firebaseApp.database().ref('/employees').on('value', snapshot => {
            dispatch(replaceEmployees(snapshot.val()))
        })
    }
}

export function draftCustomer(employee, id) {
    return dispatch => {
        firebaseApp.database().ref(`/drafts/${id}`).set({
            date: new Date().toDateString(),
            rutavdrag: employee.rutavdrag,
            customer: {
                namn: employee.namn,
                gatuaddress: employee.gatuaddress,
                postnummer: employee.postnummer,
                postord: employee.postort,
                telefonnummer: employee.telefonnummer,
                rutavdrag: employee.rutavdrag,
            },
            tasks: {},
            totalPrice: 0,
            employee: 'Hannes',
            description: 'Okänt',
        })
    }
}

export function replaceAnbud(anbud) {
    return {
        type: types.REPLACE_ANBUD,
        value: anbud,
    }
}

export function replaceDrafts(drafts) {
    return {
        type: types.REPLACE_DRAFTS,
        value: drafts,
    }
}

export function replaceCustomers(customers) {
    return {
        type: types.REPLACE_CUSTOMERS,
        value: customers,
    }
}

export function replaceUppdrag(uppdrag) {
    return {
        type: types.REPLACE_UPPDRAG,
        value: uppdrag,
    }
}

export function replaceEmployees(employees) {
    return {
        type: types.REPLACE_EMPLOYEES,
        value: employees,
    }
}



