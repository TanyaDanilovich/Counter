import {AppRootStateType} from './store';
import {CounterType} from './counterReducer';

export const counterSelector = (state: AppRootStateType):CounterType => state.counter
export const errorSelector = (state: AppRootStateType) => state.error




