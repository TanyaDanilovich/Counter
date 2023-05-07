import React from 'react';
import styled from 'styled-components'
import Button from './Button';


export type SwitchButtonsPropsType = {
    value: number
    minValue: number
    maxValue: number
    incrementCallback: () => void
    decrementCallback: () => void
    resetCallback: () => void
    isSetNewSetting: boolean
};

function SwitchButtons({
                           value,
                           minValue,
                           maxValue,
                           incrementCallback,
                           decrementCallback,
                           resetCallback,
                           isSetNewSetting
                       }: SwitchButtonsPropsType) {


    const incDisabled = value >= maxValue || isSetNewSetting
    const decrementDisabled = value === minValue || isSetNewSetting


    return (
        <Wrapper>
            <Button
                title = "inc"
                color = "blue"
                callback = {incrementCallback}
                disabled = {incDisabled}
            />

            <Button title = 'dec' color = 'blue' callback = {decrementCallback} disabled = {decrementDisabled}/>
            <Button title = 'reset' color = 'blue' callback = {resetCallback}
                    disabled = {decrementDisabled}/>
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