import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import s from './Setting.module.css'


export type SettingInputPropsType = {
    title: string
    value: number
    callback: (val: number) => void
    error: boolean
    setError?: (error: boolean) => void
    isSetNewSetting: boolean
    setIsSetNewSetting: (val: boolean) => void

}

function SettingInput(props: SettingInputPropsType) {
    const {title, value, callback, isSetNewSetting, setIsSetNewSetting, error} = props

    const onchangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(Number(e.currentTarget.value))
        if (!isSetNewSetting) setIsSetNewSetting(true)
    }

    // console.log(settingError)

    const inputClassname = !error
        ? s.input
        : `${s.input} ${s.error}`

    // console.log(inputClassname)

    return (
        <Settinglabel>
            {title}

            <input step = {1}
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