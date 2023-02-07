import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Button from './Button';
import {StateType} from './App';

export type SwitchButtonsPropsType = {
    value: number
    minValue: number
    maxValue: number
    isSettingMode: boolean
    incrementCallback: () => void
    decrementCallback: () => void
    resetCallback: () => void
    setCallback: () => void
};

function SwitchButtons({
                           value,
                           minValue,
                           maxValue,
                           incrementCallback,
                           decrementCallback,
                           resetCallback,
                           setCallback,
                           isSettingMode
                       }: SwitchButtonsPropsType) {


    const incDisabled = value >= maxValue || isSettingMode
    const decrementDisabled = value === minValue || isSettingMode
    const resetDisabled = isSettingMode

    return (
        <Wrapper>
            <Button title = "inc" color = "blue" callback = {incrementCallback} disabled = {incDisabled}/>
            <Button title = 'dec' color = 'blue' callback = {decrementCallback} disabled = {decrementDisabled}/>
            <Button title = 'reset' color = 'blue' callback = {resetCallback} disabled = {resetDisabled}/>
            <Button title = 'set' color = 'blue' callback = {setCallback} disabled = {false}/>
        </Wrapper>
    );
}

export default SwitchButtons;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  border: 5px solid #61dafb;
  border-radius: 20px;
`