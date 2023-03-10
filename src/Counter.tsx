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
}

function Counter(props: CounterPropsType) {
    const {
        state, setState, stateError, setStateError,
        incrementCallback,
        decrementCallback,
        resetCallback
    } = props

    return (
        <Wrapper>

            <Display value = {state.value}
                     isSettingChanged = {state.isSettingChanged}
                     stateError={stateError}
            />


            <SwitchButtons
                value = {state.value}
                minValue = {state.min}
                maxValue = {state.max}
                isSettingChanged = {state.isSettingChanged}
                incrementCallback = {incrementCallback}
                decrementCallback = {decrementCallback}
                resetCallback = {resetCallback}
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
`