import dialogReducer from './dialogReducer';
import { combineReducers } from 'redux'
import userReducer from './userReducers';

const rootReducer = combineReducers({
    dialog:dialogReducer,
    user:userReducer
})

export default rootReducer;