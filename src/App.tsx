import React, {useState} from 'react';
import './App.css';
import Counter from './Counter';
import Setting from './Setting';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType, CountStateType, ErrorStateType} from './state/store';
import {countDecrementAC, countIncrementAC, countResetAC} from './state/counterStateReducer';
import {setSettingDisplayModeAC} from './state/errorStateReducer';
import styled from 'styled-components';


function App() {
    // console.log("rerender App")

    let newState = null

    const storageStateAsString = localStorage.getItem('counter_State')
    if (storageStateAsString !== null) {
        newState = JSON.parse(storageStateAsString)
    }
    const [isSetNewSetting, setIsSetNewSetting] = useState<boolean>(false)


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
      //  setIsSettingMode(true)

    }

//console.log(state.max)
    return (
        <AppWrapper>
            <Setting state = {count}
                     stateError = {error}
                     isSetNewSetting = {isSetNewSetting}
                     setIsSetNewSetting = {setIsSetNewSetting}
                     setCallback={setCallback}
                     resetCallback = {resetCallback}
            />

            <Counter state = {count}
                     stateError = {error}
                     incrementCallback = {incStateValue}
                     decrementCallback = {decStateValue}
                     resetCallback = {resetCallback}
                     isSetNewSetting = {isSetNewSetting}
            />
        </AppWrapper>
    );
}

export default App;


const AppWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 50px;
`
