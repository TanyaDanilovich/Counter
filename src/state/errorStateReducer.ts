import {ErrorStateType} from './store';
import {counterActionType} from './counterStateReducer';

const initCounterError: ErrorStateType = {
    valueError: false,
    minError: false,
    maxError: false,
    additionError: false
}

export const errorStateReducer = (
    state: ErrorStateType = initCounterError,
    action: counterActionType) => {

    switch (action.type) {
        case "INCREMENT":
            let rest = (action.max - action.min) % action.addition

            return (action.value + action.addition === action.max
            || action.value + action.addition + rest === action.max
                ? {...state, valueError: true}
                : {...state, valueError: false})

        case "DECREMENT":
            return (action.value - action.addition < action.max
           // || action.value + action.addition === action.max
                ? {...state, valueError: false}
                : {...state, valueError: true})

        case "RESET":
            return {
                valueError: false,
                minError: false,
                maxError: false,
                additionError: false
            }

        default:
            return state
    }
}

