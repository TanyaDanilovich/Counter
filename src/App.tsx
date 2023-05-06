import React, {useState} from 'react';
import './App.css';
import Counter from './Counter';
import Setting from './Setting';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType, CountStateType, ErrorStateType} from './state/store';
import {countDecrementAC, countIncrementAC, countResetAC} from './state/counterStateReducer';
import {setSettingDisplayModeAC} from './state/errorStateReducer';


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
            count.min
        ))


    const decStateValue = () => {
        dispatch(countDecrementAC(
            count.value,
            count.max,
            count.min))
    }

    const resetCallback = () => {
        dispatch(countResetAC())
    }

    const setCallback = () => {
        dispatch(setSettingDisplayModeAC())
        setIsSettingMode(true)

    }

//console.log(state.max)
    return (
        <div className = "App">
            {isSettingMode && <Setting state = {count}
                                       stateError = {error}
                                       setIsSettingMode = {setIsSettingMode}
            />}

            {!isSettingMode && <Counter state = {count}
                                        stateError = {error}
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
