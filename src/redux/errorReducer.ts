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
        case "APP/REMOVE-VALUE-ERROR": {
            return {...state, valueError: false}
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
        case "APP/REMOVE-ERROR": {
            return {...state, valueError: false}
        }
        default:
            return state
    }
}

//ActionCreators
export const setValueErrorAC = () => ({type: "APP/SET-VALUE-ERROR"} as const)
export const removeValueErrorAC = () => ({type: "APP/REMOVE-VALUE-ERROR"} as const)
export const setMinErrorAC = () => ({type: "APP/SET-MIN-ERROR"} as const)
export const setMaxErrorAC = () => ({type: "APP/SET-MAX-ERROR"} as const)
export const setAdditionErrorAC = () => ({type: "APP/SET-ADDITION-ERROR"} as const)
export const removeErrorAC = () => ({type: "APP/REMOVE-ERROR"} as const)


//types
export type SetValueErrorActionType = ReturnType<typeof setValueErrorAC>
export type RemoveValueErrorActionType = ReturnType<typeof removeValueErrorAC>
export type SetMinErrorActionType = ReturnType<typeof setMinErrorAC>
export type SetMaxErrorActionType = ReturnType<typeof setMaxErrorAC>
export type SetAdditionErrorActionType = ReturnType<typeof setAdditionErrorAC>
export type RemoveErrorActionType = ReturnType<typeof removeErrorAC>


export type ErrorActionType =
    | SetValueErrorActionType
    | RemoveValueErrorActionType
    | SetMinErrorActionType
    | SetMaxErrorActionType
    | SetAdditionErrorActionType
    | RemoveErrorActionType

