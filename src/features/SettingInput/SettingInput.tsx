import React, {ChangeEvent, useEffect} from 'react';
import styled from 'styled-components';
import s from '../../widgets/Setting/Setting.module.css'


export type SettingInputPropsType = {
    title: string
    value: number
    callback: (val: number) => void
    error?: boolean
    setError?: (error: boolean) => void
    settingError?: boolean
    setMaxValError?: (error: boolean) => void
    minValError?: boolean
    setMinValError?: (error: boolean) => void
    step?: number
}

function SettingInput(props: SettingInputPropsType) {
    const {title, value, callback, settingError, step} = props

    const onchangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(Number(e.currentTarget.value))
    }


    const inputClassname = !settingError
        ? s.input
        : `${s.input} ${s.error}`


    return (
        <Settinglabel>
            {title}

            <input step = {step}
                   type = {'number'}
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