import React from 'react';
import styled from 'styled-components'
import Button from '../../shared';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {counterSelector, valueErrorSelector} from '../../redux/selectors';
import {DecrementAC, IncrementAC, ResetAC} from '../../redux/counterReducer';
import {removeValueErrorAC, setValueErrorAC} from '../../redux/errorReducer';

export type SwitchButtonsPropsType = {
    isSettingMode: boolean
    setCallback: () => void
};

function SwitchButtons({
                           setCallback, isSettingMode
                       }: SwitchButtonsPropsType) {


    const counter = useAppSelector(counterSelector)
    const isValueError = useAppSelector(valueErrorSelector)

    const dispatch = useAppDispatch()

    const incStateValue = () => {
        if (counter.value + counter.addition < counter.max) {
            dispatch(IncrementAC())
        } else if (counter.value + counter.addition === counter.max) {
            dispatch(IncrementAC())
            dispatch(setValueErrorAC())
        }
    }

    const decStateValue = () => {
        if (counter.value <= counter.max && counter.value > counter.min) {
            dispatch(DecrementAC())
            if (counter.value === counter.max) dispatch(removeValueErrorAC())
        }
    }

    const handleReset = () => {
        dispatch(ResetAC())
        if (isValueError) dispatch(removeValueErrorAC())
    }


    const incDisabled = counter.value >= counter.max || isSettingMode
    const decrementDisabled = counter.value === counter.min || isSettingMode


    return (
        <Wrapper>
            <Button title = "inc"
                    color = "blue"
                    callback = {incStateValue}
                    disabled = {incDisabled}
            />
            <Button title = 'dec'
                    color = 'blue'
                    callback = {decStateValue}
                    disabled = {decrementDisabled}
            />
            <Button title = 'reset'
                    color = 'blue'
                    callback = {handleReset}
                    disabled = {isSettingMode}
            />
            <Button title = 'set'
                    color = 'blue'
                    callback = {setCallback}
                    disabled = {false}
            />
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