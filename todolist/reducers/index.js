import {
    combineReducers
} from 'redux'
import tasks from './task';

const appReducer = combineReducers({
    tasks
})

export default appReducer;
