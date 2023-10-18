import React from 'react'
import SettingInput from '../../features/SettingInput/SettingInput';
import styled from 'styled-components';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {counterSelector, errorSelector} from '../../redux/selectors';
import {CounterSettingType} from '../../redux/counterReducer';
import {removeErrorAC} from '../../redux/errorReducer';
import {Controller, SubmitHandler, useForm} from "react-hook-form"


export type SettingPropsType = {
    setCounterMode: () => void
}


const Setting = ({setCounterMode}: SettingPropsType) => {
    const error = useAppSelector(errorSelector)
    const counter = useAppSelector(counterSelector)

    console.log(counter)

    const dispatch = useAppDispatch()

    const callbackHandler = (val: number, key: string) => {
        dispatch(removeErrorAC())
    }


    // const setMaxValueCallback = (val: number) => {
    //     console.log("render max")
    //     callbackHandler(val, "max")
    //     const addError = checkAdditional(localCounter.min, val, localCounter.addition)
    //     const maxError = checkMaxValue(localCounter.min, val)
    //     const minError = checkMaxValue(localCounter.min, val)
    //
    //     addError && console.log("add error")
    //     maxError && console.log("max error")
    //     minError && console.log("min error")
    // }
    // const setMinValueCallback = (val: number) => {
    //     console.log("render min")
    //     callbackHandler(val, "min")
    //     const addError = checkAdditional(val, localCounter.max, localCounter.addition)
    //     const maxError = checkMaxValue(val, localCounter.max)
    //     const minError = checkMaxValue(val, localCounter.max)
    //
    //     addError && console.log("add error")
    //     maxError && console.log("max error")
    //     minError && console.log("min error")
    // }
    // const setAdditionalValueCallback = (val: number) => {
    //     console.log("render add")
    //     callbackHandler(val, "addition")
    //     const addError = checkAdditional(localCounter.min, localCounter.max, val)
    //     const maxError = checkMaxValue(localCounter.min, localCounter.max)
    //     const minError = checkMaxValue(localCounter.min, localCounter.max)
    //
    //     addError && console.log("add error")
    //     maxError && console.log("max error")
    //     minError && console.log("min error")
    // }
    // const setButtonCallback = () => {
    //     dispatch(setCounterDataAC(
    //         localCounter.min,
    //         localCounter.min,
    //         localCounter.max,
    //         localCounter.addition,
    //     ))
    //     dispatch(removeValueErrorAC())
    //     setCounterMode()
    // }


    const setButtonDisabled = error.maxError
        || error.minError
        || error.additionError //|| !isSettingMode

    const {
        control,
        reset,
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<CounterSettingType>()


    const maxValue = watch('max')
    const onSubmit: SubmitHandler<CounterSettingType> = (data) => {
        console.log(data)
        console.log(watch('max'))
        reset()
    }

    return (

        <Wrapper>
            <Border>


                <form onSubmit = {handleSubmit(onSubmit)}>


                    <Controller
                        name = "max"
                        control = {control}
                        render = {({field}) =>
                            <SettingInput
                                title = {'max value'}
                                value = {field.value}
                                settingError = {error.maxError}
                                callback={field.onChange}
                            />}
                    />


                    {errors.max && <span>This field is required</span>}

                    <input type = "submit"/>
                </form>


                {/*<SettingInput title = {'max value'}*/}
                {/*              value = {localCounter.max}*/}
                {/*              callback = {setMaxValueCallback}*/}
                {/*              settingError = {error.maxError}*/}
                {/*/>*/}

                {/*<SettingInput title = {'min value'}*/}
                {/*              value = {localCounter.min}*/}
                {/*              callback = {setMinValueCallback}*/}
                {/*              settingError = {error.minError}/>*/}

                {/*<SettingInput title = {'step'}*/}
                {/*              value = {localCounter.addition}*/}
                {/*              callback = {setAdditionalValueCallback}*/}
                {/*              settingError = {error.additionError}*/}
                {/*/>*/}
            </Border>
            <Border>
                {/*<AppButton title = {'set'} color = "blue" callback = {onSubmit}*/}
                {/*           disabled = {setButtonDisabled}/>*/}
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