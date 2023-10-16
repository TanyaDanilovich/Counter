const initialState = {
    value: 0,
    min: 0,
    max: 5,
    addition: 1
}

export type CounterType = typeof initialState


export const counterReducer = (state: CounterType = initialState, action: CounterActionType): CounterType => {
    switch (action.type) {
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
export const IncrementAC = () => ({type: "APP/INCREMENT"} as const)
export const DecrementAC = () => ({type: "APP/DECREMENT"} as const)
export const ResetAC = () => ({type: "APP/RESET"} as const)


//types
export type IncrementActionType = ReturnType<typeof IncrementAC>
export type DecrementActionType = ReturnType<typeof DecrementAC>
export type ResetActionType = ReturnType<typeof ResetAC>


export type CounterActionType =
    | IncrementActionType
    | DecrementActionType
    | ResetActionType