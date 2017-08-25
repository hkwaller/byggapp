import { combineReducers } from 'redux'
import anbud from './anbud'
import customers from './customers'
import uppdrag from './uppdrag'
import employees from './employees'

const rootReducer = combineReducers({
    anbud,
    customers,
    uppdrag,
    employees,
})

export default rootReducer