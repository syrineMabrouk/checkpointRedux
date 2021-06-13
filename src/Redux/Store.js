import {createStore} from 'redux';
import {RootReducer} from '../Redux/Reducers/index';

export let store = createStore(RootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 