import React, {ChangeEvent, useEffect} from 'react';
import styled from 'styled-components';
import s from './Setting.module.css'


export type SettingInputPropsType = {
    title: string
    value: number
    minInputValue?: number
    maxInputValue?: number
    callback: (val: number) => void
    error?: boolean
    setError?: (error: boolean) => void
    settingError?: boolean
    setMaxValError?: (error: boolean) => void
    minValError?: boolean
    setMinValError?: (error: boolean) => void

}

function SettingInput(props: SettingInputPropsType) {
    const {title, value, minInputValue, maxInputValue, callback, settingError} = props

    const onchangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(Number(e.currentTarget.value))
    }


    const inputClassname = !settingError
        ? s.input
        : `${s.input} ${s.error}`


    return (
        <Settinglabel>
            {title}

            <input step = {1}
                   type = {'number'}
                   min = {minInputValue}
                   max = {maxInputValue}
                   value = {value}
                   onChange = {onchangeInputHandler}
                   className = {inputClassname}
            />

        </Settinglabel>
    );
}

export default SettingInput;


const Settinglabel = styled.label`
  font-size: 40px;
  font-weight: 700;
  color: #61dafb;
`