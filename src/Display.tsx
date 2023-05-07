import React from 'react';
import styled from 'styled-components';
import s from "./App.module.css"
import {ErrorStateType} from './state/store';


export type DisplayPropsType = {
    value: number
    isSetNewSetting: boolean
    stateError: ErrorStateType
}

function Display({
                     value,
                     stateError,
                     isSetNewSetting
                 }: DisplayPropsType) {


    const displayValue =
        isSetNewSetting
            ? stateError.settingError
                ? "incorrect value"
                : "enter values and press set"
            : value


    let classname = stateError.valueError || stateError.settingError ? s.red : ''

    const finallyClassName = isSetNewSetting ? "" : classname

    // console.log(stateError)

    return (
        <Wrapper>
            <div className = {finallyClassName}>
                {displayValue}
            </div>

        </Wrapper>
    );
}

export default Display;

const Wrapper = styled.div`
  font-size: 55px;
  font-weight: 700;
  border: 5px solid #61dafb;
  color: #61dafb;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  max-width: 450px;
  text-align: center;
`