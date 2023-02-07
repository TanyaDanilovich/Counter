import React, {useState} from 'react';
import styled from 'styled-components';
import Footer from './SwitchButtons';
import Display from './Display';
import Switching from './SwitchButtons';
import SwitchButtons from './SwitchButtons';
import {ErrorStateType, StateType} from './App';

export type CounterPropsType = {
    state: StateType
    setState: (state: StateType) => void
    stateError: ErrorStateType
    setStateError: (stateError: ErrorStateType) => void
    incrementCallback: () => void
    decrementCallback: () => void
    resetCallback: () => void
    setCallback: () => void
    isSettingMode: boolean
}

function Counter(props: CounterPropsType) {
    const {
        state, setState, stateError, setStateError, isSettingMode,
        incrementCallback,
        decrementCallback,
        resetCallback, setCallback
    } = props

    return (
        <Wrapper>

            <Display value = {state.value}
                     isSettingMode = {isSettingMode}
                     stateError = {stateError}
            />


            <SwitchButtons
                value = {state.value}
                minValue = {state.min}
                maxValue = {state.max}
                isSettingMode = {isSettingMode}
                incrementCallback = {incrementCallback}
                decrementCallback = {decrementCallback}
                resetCallback = {resetCallback}
                setCallback = {setCallback}
            />

        </Wrapper>
    );
}

export default Counter;

const Wrapper = styled.div`
  padding: 20px;
  border: 5px solid #61dafb;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  min-height: 410px;
  min-width: 600px;
`