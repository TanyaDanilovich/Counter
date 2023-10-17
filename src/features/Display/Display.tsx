import React, {useEffect} from 'react';
import styled from 'styled-components';
import "../../app/index.css"
import {useAppSelector} from '../../redux/store';
import {errorSelector, valueSelector} from '../../redux/selectors';


export type DisplayPropsType = {
    isSettingMode: boolean
}

function Display({isSettingMode}: DisplayPropsType) {

    const value = useAppSelector(valueSelector)
    const error = useAppSelector(errorSelector)
    useEffect(() => {

    }, [isSettingMode])

    const displayValue = error.minError || error.maxError || error.additionError
        ? "incorrect data"
        : isSettingMode
            ? "enter value and press 'set'"
            : value


    let classname = error.minError
    || error.maxError
    || error.additionError
    || error.valueError ?
        // "var(---color-danger)"
        'red'
        : ''

    const finallyClassName = isSettingMode ? "" : classname


    //console.log(classname)

    return (
        <Wrapper>
            <div style = {{color: `${finallyClassName}`}}
                 className = {"finallyClassName"}>
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