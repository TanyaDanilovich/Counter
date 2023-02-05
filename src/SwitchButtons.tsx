import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Button from './Button';
import {StateType} from './App';

export type SwitchButtonsPropsType = {
    value: number
    minValue: number
    maxValue: number
    isSettingChanged: boolean
    incrementCallback: () => void
    decrementCallback: () => void
    resetCallback: () => void
};

function SwitchButtons({
                           value,
                           minValue,
                           maxValue,
                           incrementCallback,
                           decrementCallback,
                           resetCallback,
                           isSettingChanged
                       }: SwitchButtonsPropsType) {

    const incrementCallbackHandler = () => {
    }
    const decrementCallbackHandler = () => {
    }
    const resetCallbackHandler = () => {

    }

    const incDisabled = value >= maxValue || isSettingChanged
    const decrementDisabled = value === minValue || isSettingChanged
    const resetDisabled = isSettingChanged

    return (
        <Wrapper>
            <Button title = "inc" color = "blue" callback = {incrementCallback} disabled = {incDisabled}/>
            <Button title = 'dec' color = 'blue' callback = {decrementCallback} disabled = {decrementDisabled}/>
            <Button title = 'reset' color = 'blue' callback = {resetCallback} disabled = {resetDisabled}/>
        </Wrapper>
    );
}

export default SwitchButtons;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;

  border: 5px solid #61dafb;
  border-radius: 15px;
`