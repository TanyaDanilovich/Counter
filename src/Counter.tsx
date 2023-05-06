import React from 'react';
import styled from 'styled-components';
import SwitchButtons from './SwitchButtons';
import Display from './Display';
import {CountStateType, ErrorStateType} from './state/store';


export type CounterPropsType = {
    state: CountStateType
    //  setState: (state: StateType) => void
    stateError: ErrorStateType
    // setStateError: (stateError: ErrorStateType) => void
    incrementCallback: () => void
    decrementCallback: () => void
    resetCallback: () => void
    setCallback: () => void
    isSettingMode: boolean
}

function Counter(props: CounterPropsType) {
    const {
        state, stateError, isSettingMode,
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