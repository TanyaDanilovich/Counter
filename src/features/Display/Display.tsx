import React, {useEffect} from 'react';
import styled from 'styled-components';
import "../../app/index.css"
import {ErrorStateType} from '../../app';


export type DisplayPropsType = {
    value: number
    isSettingMode: boolean
    stateError: ErrorStateType
}

function Display({
                     value,
                     isSettingMode,
                     stateError
                 }: DisplayPropsType) {

    useEffect(() => {

    }, [isSettingMode])

    const displayValue = stateError.minError || stateError.maxError || stateError.additionError
        ? "incorrect data"
        : isSettingMode
            ? "enter value and press 'set'"
            : value


    let classname = stateError.minError
    || stateError.maxError
    || stateError.additionError
    || stateError.valueError ? "var(---color-danger)" : ''

    const finallyClassName = isSettingMode ? "" : classname

    console.log(classname)

    return (
        <Wrapper>
            <div style = {{color: `${finallyClassName}`}}
                // className = {finallyClassName}
            >
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
`