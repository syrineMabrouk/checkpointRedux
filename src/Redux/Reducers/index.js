import {Reducer} from './Reducer';

import {combineReducers} from 'redux'
import {FilterReducer} from './FilterReducer'

export const RootReducer = combineReducers({
    Reducer,
    Filter : FilterReducer
})