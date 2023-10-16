import React, {useEffect, useState} from 'react';
import './index.css';
import './App.css';
import {Setting, Counter} from '../widgets';


export type StateType = {
    value: number
    min: number
    max: number
    addition: number
}

export type ErrorStateType = {
    valueError: boolean
    minError: boolean
    maxError: boolean
    additionError: boolean
}


function App() {
    // console.log("rerender App")
    const initState: StateType = {
        value: 0,
        addition: 1,
        min: 0,
        max: 5
    }
    let newState = null

    const storageStateAsString = localStorage.getItem('counter_State')
    if (storageStateAsString !== null) {
        newState = JSON.parse(storageStateAsString)
    }

    const [state, setState] = useState<StateType>(newState ? newState : initState)

    const [isSettingMode, setIsSettingMode] = useState<boolean>(false)

    const [stateError, setStateError] = useState<ErrorStateType>({
        valueError: false,
        minError: false,
        maxError: false,
        additionError: false
    })

    useEffect(() => {

            //check value Error
            let rest = (state.max - state.min) % state.addition
            rest === 0
                ? state.value === state.max
                    ? setStateError({...stateError, valueError: true})
                    : setStateError({...stateError, valueError: false})
                : state.value + rest === state.max
                    ? setStateError({...stateError, valueError: true})
                    : setStateError({...stateError, valueError: false})
        }, [state]
    )

    const incStateValue = () => state.value + state.addition <= state.max && setState({
        ...state,
        value: state.value + state.addition
    })


    const decStateValue = () => {
        (state.value <= state.max) && (state.value > state.min)
        && setState({...state, value: state.value - state.addition})
    }

    const resetCallback = () => {
        setState({...state, value: state.min, addition: state.addition})
        setStateError({
            valueError: false,
            minError: false,
            maxError: false,
            additionError: false
        })
    }

    const setCallback = () => setIsSettingMode(true)

//console.log(state.max)
    return (
        <div className = "App">
            {isSettingMode && <Setting state = {state}
                                       setState = {setState}
                                       stateError = {stateError}
                                       setStateError = {setStateError}
                                       isSettingMode = {isSettingMode}
                                       setIsSettingMode = {setIsSettingMode}
            />}

            {!isSettingMode && <Counter state = {state}
                                        setState = {setState}
                                        stateError = {stateError}
                                        setStateError = {setStateError}
                                        incrementCallback = {incStateValue}
                                        decrementCallback = {decStateValue}
                                        resetCallback = {resetCallback}
                                        setCallback = {setCallback}
                                        isSettingMode = {isSettingMode}
            />}
        </div>
    );
}

export default App;
