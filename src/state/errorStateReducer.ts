import {ErrorStateType} from './store';
import {counterActionType} from './counterStateReducer';

const initCounterError: ErrorStateType = {
    error: false
}

export type SetSettingDisplayModeActionType = { type: "SET_SETTING_DISPLAY_MODE" }

export type  CheckMinActionType = {
    type: "CHECK_MIN"
    min: number
    max: number
}

export type CheckMaxActionType = {
    type: "CHECK_MAX"
    min: number
    max: number
}

export const errorStateReducer = (
    state: ErrorStateType = initCounterError,
    action: counterActionType
        | SetSettingDisplayModeActionType
        | CheckMinActionType
        | CheckMaxActionType) => {

    switch (action.type) {
        case "INCREMENT":
            return (action.value + 1 === action.max
                ? {error: true}
                : {error: false})

        case "DECREMENT":
            return (action.value - 1 < action.max
                ? {error: false}
                : {error: true})

        case "RESET":
            return {
                error: false
            }

        case "NEW_SETTING_VALUES":
            return {
                error: false
            }

        case "SET_SETTING_DISPLAY_MODE":
            return {
                error: false
            }

        case "CHECK_MIN":
            return action.min >= 0 && action.min < action.max
                ? {error: false}
                : {error: true}

        case "CHECK_MAX":
            return action.max >= 0 && action.min < action.max
                ? {error: false}
                : {error: true}

        default:
            return state
    }
}

export const setSettingDisplayModeAC = () => {
    return {type: "SET_SETTING_DISPLAY_MODE"} as const
}

export const checkMinAC = (min: number, max: number) => {
    return {type: "CHECK_MIN", min, max} as const
}

export const checkMaxAC = (min: number, max: number) => {
    return {type: "CHECK_MAX", min, max} as const
}