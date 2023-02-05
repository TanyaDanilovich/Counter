import React, {useEffect, useState} from 'react'
import Button from './Button';
import {ErrorStateType, StateType} from './App';
import SettingInput from './SettingInput';
import styled from 'styled-components';

export type SettingPropsType = {
    state: StateType
    setState: (newState: StateType) => void
    stateError: ErrorStateType
    setStateError: (newState: ErrorStateType) => void
}


const Setting = (props: SettingPropsType) => {

    const {state, setState, stateError, setStateError} = props
    const [localState, setLocalState] = useState<StateType>({...state})

    useEffect(() => {

        localState.max < 0 && setStateError({...stateError, maxError: true})

        localState.min >= 0 && localState.max >= 0 && localState.min < localState.max
            ? setStateError({...stateError, maxError: false, minError: false})
            : setStateError({...stateError, maxError: true, minError: true})


        localState.min + localState.addition > localState.max || localState.addition <= 0
            ? setStateError({...stateError, additionError: true})
            : setStateError({...stateError, additionError: false})


    }, [localState.max])
    useEffect(() => {

        localState.min < 0 && setStateError({...stateError, minError: true})


        localState.min >= 0 && localState.max >= 0 && localState.min < localState.max
            ? setStateError({...stateError, maxError: false, minError: false})
            : setStateError({...stateError, maxError: true, minError: true})


        localState.min + localState.addition > localState.max || localState.addition <= 0
            ? setStateError({...stateError, additionError: true})
            : setStateError({...stateError, additionError: false})


    }, [localState.min])
    useEffect(() => {

        localState.addition < 0 && setStateError({...stateError, additionError: true})

        localState.min + localState.addition > localState.max || localState.addition <= 0
            ? setStateError({...stateError, additionError: true})
            : setStateError({...stateError, additionError: false})


    }, [localState.addition])


    const setMaxValueCallback = (val: number) => {
        stateError.valueError && setStateError({...stateError, valueError: false})
        setState({...state, isSettingChanged: true})
        setLocalState({...localState, max: val})
    }


    const setMinValueCallback = (val: number) => {
        stateError.valueError && setStateError({...stateError, valueError: false})
        setState({...state, isSettingChanged: true})
        setLocalState({...localState, min: val})
    }


    const setAdditionalValueCallback = (val: number) => {
        stateError.valueError && setStateError({...stateError, valueError: false})
        setState({...state, isSettingChanged: true})
        setLocalState({...localState, addition: val})
    }


    const setButtonCallback = () => setState({
        value: localState.min,
        min: localState.min,
        max: localState.max,
        addition: localState.addition,
        isSettingChanged: false
    })

    const setButtonDisabled = stateError.maxError
        || stateError.minError
        || stateError.additionError
        || !state.isSettingChanged

    return (

        <Wrapper>
            <Border>
                <SettingInput title = {'max value'}
                              value = {localState.max}
                              callback = {setMaxValueCallback}
                              settingError = {stateError.maxError}
                />

                <SettingInput title = {'min value'}
                              value = {localState.min}
                              callback = {setMinValueCallback}
                              settingError = {stateError.minError}/>

                <SettingInput title = {'step'}
                              value = {localState.addition}
                              callback = {setAdditionalValueCallback}
                              settingError = {stateError.additionError}
                />
            </Border>
            <Border>
                <Button title = {'set'} color = "blue" callback = {setButtonCallback} disabled = {setButtonDisabled}/>
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
`
const Border = styled.div`
  padding: 20px;
  border: 5px solid #61dafb;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`