import {createStore, combineReducers} from 'redux'
import {counterReducer} from './counterReducer';
import {errorReducer} from './errorReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    error: errorReducer
})


export const state = createStore(rootReducer)
