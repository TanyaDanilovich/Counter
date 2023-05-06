
import {combineReducers, createStore} from 'redux';
import {counterStateReducer} from './counterStateReducer';
import {errorStateReducer} from './errorStateReducer';

export type CountStateType = {
    value: number
    min: number
    max: number
    addition: number
}

export type ErrorStateType = {
    valueError: boolean
    minError: boolean
    maxError: boolean
    additionError: boolean
}







const rootReducer = combineReducers({
    count: counterStateReducer,
    error: errorStateReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>