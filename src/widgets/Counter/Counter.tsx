import React from 'react';
import styled from 'styled-components';
import SwitchButtons from '../../features/SwitchButton/SwitchButtons';
import Display from '../../features/Display/Display';
import {ErrorStateType, StateType} from '../../app';



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