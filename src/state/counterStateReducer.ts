import {CountStateType} from './store';

export type IncrementActionType = {
    type: "INCREMENT"
    value: number
    max: number
    min: number
}

export type DecrementActionType = {
    type: "DECREMENT"
    value: number
    max: number
    min: number
}


export type ResetActionType = {
    type: "RESET"
}

export type setNewValuesActionType = {
    type: "NEW_SETTING_VALUES"
    value: number
    min: number
    max: number
}

export type counterActionType =
    IncrementActionType
    | DecrementActionType
    | ResetActionType
    | setNewValuesActionType

const initCounterState: CountStateType = {
    value: 0,
    min: 0,
    max: 5
}

export function counterStateReducer(
    state: CountStateType = initCounterState,
    action: counterActionType) {
    switch (action.type) {
        case "INCREMENT":
            return (
                state.value + 1 <= state.max
                    ? {...state, value: state.value + 1}
                    : state)


        case "DECREMENT":

            return (action.value <= action.max) && (action.value > action.min)
                ? {...state, value: action.value - 1}
                : state


        case "RESET":
            return {...state, value: state.min}

        case "NEW_SETTING_VALUES":
            return {
                value: action.value,
                min: action.min,
                max: action.max
            }

        default:
            return state
    }
}

export const countIncrementAC = (value: number,
                                 max: number,
                                 min: number) => {
    return {type: "INCREMENT", value, max, min} as const
}


export const countDecrementAC = (value: number,
                                 max: number,
                                 min: number) => {
    return {type: "DECREMENT", value, max, min} as const
}


export const countResetAC = () => {
    return {type: "RESET"} as const
}


export const newSettingValuesAC = (
    value: number,
    min: number,
    max: number): setNewValuesActionType => {
    return {type: "NEW_SETTING_VALUES", value, min, max}
}