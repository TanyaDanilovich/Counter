import React from 'react';
import styled from 'styled-components';
import s from "./App.module.css"
import {ErrorStateType} from './App';

export type DisplayPropsType = {
    value: number
    isSettingChanged: boolean
    stateError: ErrorStateType
}

function Display({
                     value,
                     isSettingChanged,
                     stateError
                 }: DisplayPropsType) {


    const displayValue = stateError.minError || stateError.maxError || stateError.additionError
        ? "incorrect data"
        : isSettingChanged
            ? "enter value and press 'set'"
            : value


    return (
        <Wrapper>
            <div className = {stateError.minError
            || stateError.maxError
            || stateError.additionError
            || stateError.valueError ? s.red : ''}>
                {displayValue}
            </div>

        </Wrapper>
    );
}

export default Display;

const Wrapper = styled.div`
  font-size: 55px;
  font-weight: 700;
  height: 100px;
  width: 700px;
  border: 5px solid #61dafb;
  color: #61dafb;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`