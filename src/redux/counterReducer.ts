export type CounterSettingType = {
    min: number,
    max: number,
    step: number
}


const initialState: CounterSettingType & { value: number } = {
    value: 0,
    min: 0,
    max: 5,
    step: 1
}

export type CounterType = typeof initialState


export const counterReducer = (state: CounterType = initialState, action: CounterActionType): CounterType => {
    switch (action.type) {
        case "APP/SET-COUNTER-DATA": {
            return {
                ...state,
                value: action.value, min: action.min, max: action.max, step: action.step
            }
        }

        case "APP/SET-NEW-SETTING-DATA": {
            return {
                ...state,
                min: action.min, max: action.max, step: action.step
            }
        }
        case "APP/INCREMENT": {
            return {
                ...state,
                value: state.value + state.step
            }
        }

        case "APP/DECREMENT": {
            return {
                ...state,
                value: state.value - state.step
            }
        }

        case "APP/RESET": {
            return {
                ...state,
                value: action.min
            }
        }
        default:
            return state
    }
}


//ActionCreators
export const setCounterDataAC = (value: number,
                                 min: number,
                                 max: number,
                                 step: number) =>
    ({type: "APP/SET-COUNTER-DATA", value, min, max, step} as const)
export const setNewSettingDataAC = (min: number,
                                    max: number,
                                    step: number) =>
    ({type: "APP/SET-NEW-SETTING-DATA", min, max, step} as const)
export const incrementAC = () => ({type: "APP/INCREMENT"} as const)
export const decrementAC = () => ({type: "APP/DECREMENT"} as const)
export const resetAC = (min: number) => ({type: "APP/RESET", min} as const)


//types
export type SetCounterDataActionType = ReturnType<typeof setCounterDataAC>
export type SetNewSettingDataActionType = ReturnType<typeof setNewSettingDataAC>
export type IncrementActionType = ReturnType<typeof incrementAC>
export type DecrementActionType = ReturnType<typeof decrementAC>
export type ResetActionType = ReturnType<typeof resetAC>


export type CounterActionType =
    SetCounterDataActionType
    | SetNewSettingDataActionType
    | IncrementActionType
    | DecrementActionType
    | ResetActionType