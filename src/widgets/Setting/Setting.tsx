import React, {useEffect, useState} from 'react'
import AppButton from '../../shared';
import SettingInput from '../../features/SettingInput/SettingInput';
import styled from 'styled-components';
import {ErrorStateType, StateType} from '../../app';



export type SettingPropsType = {
    state: StateType
    setState: (newState: StateType) => void
    stateError: ErrorStateType
    setStateError: (newState: ErrorStateType) => void
    isSettingMode: boolean
    setIsSettingMode: (newState: boolean) => void
}


const Setting = (props: SettingPropsType) => {

    const {state, setState, stateError, setStateError, isSettingMode, setIsSettingMode} = props
    const [localState, setLocalState] = useState<StateType>({...state})

    useEffect(() => {

        localStorage.setItem('counter_State', JSON.stringify({
            value: state.min,
            min: state.min,
            max: state.max,
            addition: state.addition,
        }));
    }, [state])




    const callbackHandler = (val: number, key: string) => {
        setStateError({
            valueError: false,
            minError: false,
            maxError: false,
            additionError: false
        })
        setIsSettingMode(true)
        setLocalState({...localState, [key]: val})
    }

    //check the possibility of increasing the additional
    const checkAdditional = (min: number, max: number, add: number) => (min + add) > max ? true : false

    //check the maximum is always greater than the minimum
    const checkMaxValue = (min: number, max: number) => max <= min || min < 0 ? true : false

    //check the minimum is always greater than the minimum
    const checkMinValue = (min: number, max: number) => min >= max || max < 0 ? true : false


    const setMaxValueCallback = (val: number) => {
        console.log("render max")
        callbackHandler(val, "max")
        const addError = checkAdditional(localState.min, val, localState.addition)
        const maxError = checkMaxValue(localState.min, val)
        const minError = checkMaxValue(localState.min, val)

        addError && console.log("add error")
        maxError && console.log("max error")
        minError && console.log("min error")

        val <= 0 || addError || maxError || minError
            ? setStateError({...stateError, maxError: true, minError: true, additionError: addError})
            : setStateError({...stateError, maxError: false, minError: false, additionError: addError})

    }

    const setMinValueCallback = (val: number) => {
        console.log("render min")
        callbackHandler(val, "min")
        const addError = checkAdditional(val, localState.max, localState.addition)
        const maxError = checkMaxValue(val, localState.max)
        const minError = checkMaxValue(val, localState.max)

        addError && console.log("add error")
        maxError && console.log("max error")
        minError && console.log("min error")

        val < 0 || addError || maxError || minError
            ? setStateError({...stateError, minError: true, maxError: true, additionError: addError})
            : setStateError({...stateError, minError: false, maxError: false, additionError: addError})
    }

    const setAdditionalValueCallback = (val: number) => {
        console.log("render add")
        callbackHandler(val, "addition")
        const addError = checkAdditional(localState.min, localState.max, val)
        const maxError = checkMaxValue(localState.min, localState.max)
        const minError = checkMaxValue(localState.min, localState.max)

        addError && console.log("add error")
        maxError && console.log("max error")
        minError && console.log("min error")

        val < 0 || addError || maxError || minError
            ? setStateError({...stateError, additionError: true, minError: maxError, maxError: maxError})
            : setStateError({...stateError, additionError: false, minError: maxError, maxError: maxError})
    }


    const setButtonCallback = () => {
        setState({
            value: localState.min,
            min: localState.min,
            max: localState.max,
            addition: localState.addition,
        })
        setIsSettingMode(false)


    }

    const setButtonDisabled = stateError.maxError
        || stateError.minError
        || stateError.additionError || !isSettingMode


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
                <AppButton title = {'set'} color = "blue" callback = {setButtonCallback} disabled = {setButtonDisabled}/>
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