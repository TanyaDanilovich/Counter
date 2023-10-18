const initialState = {
    value: 0,
    min: 0,
    max: 5,
    addition: 1
}

export type CounterType = typeof initialState


export const counterReducer = (state: CounterType = initialState, action: CounterActionType): CounterType => {
    switch (action.type) {
        case "APP/SET-COUNTER-DATA": {
            return {
                ...state,
                value: action.value, min: action.min, max: action.max, addition: action.addition
            }
        }
        case "APP/INCREMENT": {
            return {
                ...state,
                value: state.value + state.addition
            }
        }

        case "APP/DECREMENT": {
            return {
                ...state,
                value: state.value - state.addition
            }
        }

        case "APP/RESET": {
            return initialState
        }
        default:
            return state
    }
}


//ActionCreators
export const setCounterDataAC = (value: number,
                                 min: number,
                                 max: number,
                                 addition: number) =>
    ({type: "APP/SET-COUNTER-DATA", value, min, max, addition} as const)
export const incrementAC = () => ({type: "APP/INCREMENT"} as const)
export const decrementAC = () => ({type: "APP/DECREMENT"} as const)
export const resetAC = () => ({type: "APP/RESET"} as const)


//types
export type SetCounterDataActionType = ReturnType<typeof setCounterDataAC>
export type IncrementActionType = ReturnType<typeof incrementAC>
export type DecrementActionType = ReturnType<typeof decrementAC>
export type ResetActionType = ReturnType<typeof resetAC>


export type CounterActionType = SetCounterDataActionType
    | IncrementActionType
    | DecrementActionType
    | ResetActionType