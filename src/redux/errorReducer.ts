const initialState = {
    valueError: false,
    minError: false,
    maxError: false,
    additionError: false
}

export type ErrorType = typeof initialState

export const errorReducer = (state: ErrorType = initialState, action: ErrorActionType) => {
    switch (action.type) {
        case "APP/SET-VALUE-ERROR": {
            return {...state, valueError: true}
        }

        case "APP/SET-MIN-ERROR": {
            return {...state, minError: true}
        }

        case "APP/SET-MAX-ERROR": {
            return {...state, maxError: true}
        }

        case "APP/SET-ADDITION-ERROR": {
            return {...state, additionError: true}
        }
        default:
            return state
    }
}

//ActionCreators
export const SetValueErrorAC = () => ({type: "APP/SET-VALUE-ERROR"} as const)
export const SetMinErrorAC = () => ({type: "APP/SET-MIN-ERROR"} as const)
export const SetMaxErrorAC = () => ({type: "APP/SET-MAX-ERROR"} as const)
export const SetAdditionErrorAC = () => ({type: "APP/SET-ADDITION-ERROR"} as const)


//types
export type SetValueErrorActionType = ReturnType<typeof SetValueErrorAC>
export type SetMinErrorActionType = ReturnType<typeof SetMinErrorAC>
export type SetMaxErrorActionType = ReturnType<typeof SetMaxErrorAC>
export type SetAdditionErrorActionType = ReturnType<typeof SetAdditionErrorAC>


export type ErrorActionType =
    | SetValueErrorActionType
    | SetMinErrorActionType
    | SetMaxErrorActionType
    | SetAdditionErrorActionType

