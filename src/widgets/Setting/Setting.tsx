import React, {useState} from 'react'
import SettingInput from '../../features/SettingInput/SettingInput';
import styled from 'styled-components';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {counterSelector, errorSelector} from '../../redux/selectors';
import {CounterType, setCounterDataAC} from '../../redux/counterReducer';
import {removeErrorAC, removeValueErrorAC} from '../../redux/errorReducer';
import AppButton from '../../shared';


export type SettingPropsType = {
    setCounterMode: () => void
}


const Setting = ({setCounterMode}: SettingPropsType) => {
    const error = useAppSelector(errorSelector)
    const counter = useAppSelector(counterSelector)

    console.log(counter)

    const dispatch = useAppDispatch()

    const [localCounter, setLocalState] = useState<CounterType>({...counter})


    // useEffect(() => {
    //
    //     localStorage.setItem('counter_State', JSON.stringify({
    //         value: state.min,
    //         min: state.min,
    //         max: state.max,
    //         addition: state.addition,
    //     }));
    // }, [state])


    const callbackHandler = (val: number, key: string) => {
        dispatch(removeErrorAC())
        setLocalState({...localCounter, [key]: val})
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
        const addError = checkAdditional(localCounter.min, val, localCounter.addition)
        const maxError = checkMaxValue(localCounter.min, val)
        const minError = checkMaxValue(localCounter.min, val)

        addError && console.log("add error")
        maxError && console.log("max error")
        minError && console.log("min error")

        // val <= 0 || addError || maxError || minError
        //     ? setStateError({...stateError, maxError: true, minError: true, additionError: addError})
        //     : setStateError({...stateError, maxError: false, minError: false, additionError: addError})

    }

    const setMinValueCallback = (val: number) => {
        console.log("render min")
        callbackHandler(val, "min")
        const addError = checkAdditional(val, localCounter.max, localCounter.addition)
        const maxError = checkMaxValue(val, localCounter.max)
        const minError = checkMaxValue(val, localCounter.max)

        addError && console.log("add error")
        maxError && console.log("max error")
        minError && console.log("min error")

        // val < 0 || addError || maxError || minError
        //     ? setStateError({...stateError, minError: true, maxError: true, additionError: addError})
        //     : setStateError({...stateError, minError: false, maxError: false, additionError: addError})
    }

    const setAdditionalValueCallback = (val: number) => {
        console.log("render add")
        callbackHandler(val, "addition")
        const addError = checkAdditional(localCounter.min, localCounter.max, val)
        const maxError = checkMaxValue(localCounter.min, localCounter.max)
        const minError = checkMaxValue(localCounter.min, localCounter.max)

        addError && console.log("add error")
        maxError && console.log("max error")
        minError && console.log("min error")

        // val < 0 || addError || maxError || minError
        //     ? setStateError({...stateError, additionError: true, minError: maxError, maxError: maxError})
        //     : setStateError({...stateError, additionError: false, minError: maxError, maxError: maxError})
    }


    const setButtonCallback = () => {
        dispatch(setCounterDataAC(
            localCounter.min,
            localCounter.min,
            localCounter.max,
            localCounter.addition,
        ))
        dispatch(removeValueErrorAC())
        setCounterMode()
    }

    const setButtonDisabled = error.maxError
        || error.minError
        || error.additionError //|| !isSettingMode


    return (

        <Wrapper>
            <Border>
                <SettingInput title = {'max value'}
                              value = {localCounter.max}
                              callback = {setMaxValueCallback}
                              settingError = {error.maxError}
                />

                <SettingInput title = {'min value'}
                              value = {localCounter.min}
                              callback = {setMinValueCallback}
                              settingError = {error.minError}/>

                <SettingInput title = {'step'}
                              value = {localCounter.addition}
                              callback = {setAdditionalValueCallback}
                              settingError = {error.additionError}
                />
            </Border>
            <Border>
                <AppButton title = {'set'} color = "blue" callback = {setButtonCallback}
                           disabled = {setButtonDisabled}/>
                <button onClick = {setCounterMode}>go back</button>
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