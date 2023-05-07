import React from 'react';
import styled from 'styled-components';
import SwitchButtons from './SwitchButtons';
import Display from './Display';
import {CountStateType, ErrorStateType} from './state/store';


export type CounterPropsType = {
    state: CountStateType
    stateError: ErrorStateType
    incrementCallback: () => void
    decrementCallback: () => void
    resetCallback: () => void
    isSetNewSetting: boolean
}

function Counter(props: CounterPropsType) {
    const {
        state, stateError,
        incrementCallback,
        decrementCallback,
        resetCallback,
        isSetNewSetting
    } = props

    return (
        <Wrapper>

            <Display value = {state.value}
                     stateError = {stateError}
                     isSetNewSetting={isSetNewSetting}
            />


            <SwitchButtons
                value = {state.value}
                minValue = {state.min}
                maxValue = {state.max}
                incrementCallback = {incrementCallback}
                decrementCallback = {decrementCallback}
                resetCallback = {resetCallback}
                isSetNewSetting={isSetNewSetting}
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
  //min-width: 600px;
`