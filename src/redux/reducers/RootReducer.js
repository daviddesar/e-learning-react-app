import {combineReducers} from 'redux'
import courseListReducer from './courseListReducer'
import courseDetailReducer from './courseDetailReducer'
import cartReducer from './cartReducer'
import modalReducer from './modalReducer'
import authReducer from './authReducer'

const RootReducer = combineReducers({
    courseList: courseListReducer,
    courseDetail: courseDetailReducer,
    cart: cartReducer,
    modal: modalReducer,
    auth: authReducer
})

export default RootReducer