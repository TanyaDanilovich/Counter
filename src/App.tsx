import React, {useState} from 'react';
import './App.css';
import Counter from './Counter';
import Setting from './Setting';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType, CountStateType, ErrorStateType} from './state/store';
import {countDecrementAC, countIncrementAC, countResetAC} from './state/counterStateReducer';


function App() {
    // console.log("rerender App")

    let newState = null

    const storageStateAsString = localStorage.getItem('counter_State')
    if (storageStateAsString !== null) {
        newState = JSON.parse(storageStateAsString)
    }
    const [isSettingMode, setIsSettingMode] = useState<boolean>(false)


    const count = useSelector<AppRootStateType, CountStateType>(state => state.count)
    const error = useSelector<AppRootStateType, ErrorStateType>(state => state.error)

    const dispatch = useDispatch()


    const incStateValue = () =>
        dispatch(countIncrementAC(
            count.value,
            count.max,
            count.min,
            count.addition
        ))


    const decStateValue = () => {
        dispatch(countDecrementAC(
            count.value,
            count.max,
            count.min,
            count.addition))
    }

    const resetCallback = () => {
        dispatch(countResetAC())
        // dispatch(errorResetAC())
    }

    const setCallback = () => setIsSettingMode(true)

//console.log(state.max)
    return (
        <div className = "App">
            {isSettingMode && <Setting state = {count}
                // setState = {setState}
                                       stateError = {error}
                //  setStateError = {setStateError}
                                       isSettingMode = {isSettingMode}
                                       setIsSettingMode = {setIsSettingMode}
            />}

            {!isSettingMode && <Counter state = {count}
                // setState = {setState}
                                        stateError = {error}
                // setStateError = {setStateError}
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
