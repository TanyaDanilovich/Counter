import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from './Counter';
import Setting from './Setting';

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
    console.log("rerender App")
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


    const incStateValue = () => {

        state.max % state.addition === 0 ? console.log("кратно") : console.log("не кратно");


        state.value + state.addition <= state.max && setState({...state, value: state.value + state.addition})


        //setStateError({...stateError, valueError: true})
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
                     isSettingMode = {isSettingMode}
                     setIsSettingMode = {setIsSettingMode}
            />

            <Counter state = {state}
                     setState = {setState}
                     stateError = {stateError}
                     setStateError = {setStateError}
                     incrementCallback = {incStateValue}
                     decrementCallback = {decStateValue}
                     resetCallback = {resetCallback}
                     isSettingMode = {isSettingMode}
            />
        </div>
    );
}

export default App;
