import { combineReducers } from 'redux'
import anbud from './anbud'
import customers from './customers'
import uppdrag from './uppdrag'
import employees from './employees'
import drafts from './drafts'

const rootReducer = combineReducers({
    anbud,
    customers,
    uppdrag,
    employees,
    drafts,
})

export default rootReducer