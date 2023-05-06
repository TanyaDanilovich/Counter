import {CountStateType} from './store';

export type IncrementActionType = {
    type: "INCREMENT"
    value: number
    max: number
    min: number
    addition: number
}

export type DecrementActionType = {
    type: "DECREMENT"
    value: number
    max: number
    min: number
    addition: number
}


export type ResetActionType = {
    type: "RESET"
    rest?: number
}

export type setNewValuesActionType = {
    type: "NEW_SETTING_VALUES"
    value: number
    min: number
    max: number
    addition: number
}

export type counterActionType =
    IncrementActionType
    | DecrementActionType
    | ResetActionType
    | setNewValuesActionType

const initCounterState: CountStateType = {
    value: 0,
    addition: 1,
    min: 0,
    max: 5
}

export function counterStateReducer(
    state: CountStateType = initCounterState,
    action: counterActionType) {
    switch (action.type) {
        case "INCREMENT":
            let rest = (action.max - action.min) % action.addition

            return (
                action.value + action.addition <= action.max ||
                action.value + action.addition <= action.max
                    ? {...state, value: action.value + action.addition}
                    : state)


        case "DECREMENT":

            return (action.value <= action.max) && (action.value > action.min)
                ? {...state, value: action.value - action.addition}
                : state


        case "RESET":
            return {...state, value: state.min, addition: state.addition}

        case "NEW_SETTING_VALUES":
            return {
                value: action.value,
                min: action.min,
                max: action.max,
                addition: action.addition
            }

        default:
            return state
    }
}

export const countIncrementAC = (value: number,
                                 max: number,
                                 min: number,
                                 addition: number) => {
    return {type: "INCREMENT", value, max, min, addition} as const
}


export const countDecrementAC = (value: number,
                                 max: number,
                                 min: number,
                                 addition: number) => {
    return {type: "DECREMENT", value, max, min, addition} as const
}


export const countResetAC = () => {
    return {type: "RESET"} as const
}


export const newSettingValuesAC = (
    value: number,
    min: number,
    max: number,
    addition: number): setNewValuesActionType => {
    return {type: "NEW_SETTING_VALUES", value, min, max, addition}
}