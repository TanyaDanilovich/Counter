import React, {useState} from 'react'
import Button from './Button';
import SettingInput from './SettingInput';
import styled from 'styled-components';
import {CountStateType, ErrorStateType} from './state/store';
import {useDispatch} from 'react-redux';
import {newSettingValuesAC} from './state/counterStateReducer';
import {checkMaxAC, checkMinAC} from './state/errorStateReducer';


export type SettingPropsType = {
    state: CountStateType
    stateError: ErrorStateType
    setIsSettingMode: (newState: boolean) => void
}


const Setting = (props: SettingPropsType) => {

    const {state, stateError, setIsSettingMode} = props
    const [localState, setLocalState] = useState<CountStateType>({...state})
    const dispatch = useDispatch()

    const callbackHandler = (val: number, key: string) => {
        setLocalState({...localState, [key]: val})
    }

    console.log(stateError.error)

    const setMaxValueCallback = (val: number) => {
        callbackHandler(val, "max")
        dispatch(checkMaxAC(localState.min, val))
    }


    const setMinValueCallback = (val: number) => {
        callbackHandler(val, "min")
        dispatch(checkMinAC(val, localState.max))
    }


    const setButtonCallback = () => {
        dispatch(
            newSettingValuesAC(localState.min, localState.min, localState.max)
        )
        setIsSettingMode(false)
    }


    return (

        <Wrapper>
            <Border>
                <SettingInput title = {'max value'}
                              value = {localState.max}
                              callback = {setMaxValueCallback}
                              settingError = {stateError.error}
                />

                <SettingInput title = {'min value'}
                              value = {localState.min}
                              callback = {setMinValueCallback}
                              settingError = {stateError.error}
                />

            </Border>
            <Border>
                <Button title = {'set'} color = "blue" callback = {setButtonCallback}/>
            </Border>
        </Wrapper>
    )
}

export default Setting;

const Wrapper = styled.div`
  padding: 20px;
  border: 5px solid #61dafb;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  min-height: 410px;
  min-width: 600px;
`
const Border = styled.div`
  padding: 20px;
  border: 5px solid #61dafb;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  justify-content: center;
  align-items: center;
`