import React, {useEffect, useState} from 'react';
import './index.css';
import './App.css';
import {Setting, Counter} from '../widgets';
import {counterSelector, errorSelector} from '../redux/selectors';
import {useAppDispatch, useAppSelector} from '../redux/store';
import {DecrementAC, IncrementAC, ResetAC} from '../redux/counterReducer';


function App() {
    // console.log("rerender App")

    let newState = null

    const storageStateAsString = localStorage.getItem('counter_State')
    if (storageStateAsString !== null) {
        newState = JSON.parse(storageStateAsString)
    }


    const counter = useAppSelector(counterSelector)
    const error = useAppSelector(errorSelector)

    const dispatch = useAppDispatch()

    const [isSettingMode, setIsSettingMode] = useState<boolean>(false)

    // useEffect(() => {
    //
    //         //check value Error
    //         let rest = (state.max - state.min) % state.addition
    //         rest === 0
    //             ? state.value === state.max
    //                 ? setStateError({...stateError, valueError: true})
    //                 : setStateError({...stateError, valueError: false})
    //             : state.value + rest === state.max
    //                 ? setStateError({...stateError, valueError: true})
    //                 : setStateError({...stateError, valueError: false})
    //     }, [state]
    // )

    const incStateValue = () => {
        if (counter.value + counter.addition <= counter.max) {
            dispatch(IncrementAC())
        }
    }
    
    const decStateValue = () => {
        if (counter.value <= counter.max && counter.value > counter.min) {
            dispatch(DecrementAC())
        }
    }

    const resetCallback = () => dispatch(ResetAC())

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
