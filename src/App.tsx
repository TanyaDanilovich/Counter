import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from './Counter';
import Setting from './Setting';

export type StateType = {
    value: number
    min: number
    max: number
    addition: number
    isSettingChanged: boolean
}

export type ErrorStateType = {
    valueError: boolean
    minError: boolean
    maxError: boolean
    additionError: boolean
}

function App() {
    const [state, setState] = useState<StateType>({
        value: 0,
        addition: 1,
        min: 0,
        max: 5,
        isSettingChanged: false
    })

    const [stateError, setStateError] = useState<ErrorStateType>({
        valueError: false,
        minError: false,
        maxError: false,
        additionError: false
    })


    useEffect(() => {

        state.value === state.max || state.value + state.addition >= state.max
            ? setStateError({...stateError, valueError: true})
            : setStateError({...stateError, valueError: false})
        
    }, [state.value])

    const incStateValue = () => {

        (state.value < state.max) && (state.value >= state.min) && (state.value + state.addition <= state.max)
        && setState({...state, value: state.value + state.addition})

        state.value === state.max && setStateError({...stateError, valueError: true})
    }

    const decStateValue = () => {
        (state.value <= state.max) && (state.value > state.min)
        && setState({...state, value: state.value - state.addition})
    }

    const resetCallback = () => {
        setState({...state, value: state.min, addition: 1})
        setStateError({
            valueError: false,
            minError: false,
            maxError: false,
            additionError: false
        })
    }

    //console.log(state.max)
    return (
        <div className = "App">
            <Setting state = {state}
                     setState = {setState}
                     stateError = {stateError}
                     setStateError = {setStateError}
            />

            <Counter state = {state}
                     setState = {setState}
                     stateError = {stateError}
                     setStateError = {setStateError}
                     incrementCallback = {incStateValue}
                     decrementCallback = {decStateValue}
                     resetCallback = {resetCallback}
            />
        </div>
    );
}

export default App;
