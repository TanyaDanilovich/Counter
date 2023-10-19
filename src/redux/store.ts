import {createStore, combineReducers} from 'redux'
import {CounterActionType, counterReducer} from './counterReducer';
import {ErrorActionType, errorReducer} from './errorReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {loadState, saveState} from '../utils/localstorage';

const rootReducer = combineReducers({
    counter: counterReducer,
    error: errorReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, loadState())

export type AppStoreType = typeof store

store.subscribe(() => {
    saveState({counter: store.getState().counter})
})
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
export const useAppDispatch = () => useDispatch<Dispatch<CounterActionType | ErrorActionType>>();






