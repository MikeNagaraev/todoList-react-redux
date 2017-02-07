import { createStore } from 'redux'
import appReducer  from '../reducers'

const store = createStore(appReducer);
window.store = store;
export default store;
