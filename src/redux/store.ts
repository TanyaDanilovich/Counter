import {createStore, combineReducers} from 'redux'
import {CounterActionType, counterReducer} from './counterReducer';
import {ErrorActionType, errorReducer} from './errorReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    error: errorReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

export type AppStoreType = typeof store


export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
export const useAppDispatch = () => useDispatch<Dispatch<CounterActionType | ErrorActionType>>();






