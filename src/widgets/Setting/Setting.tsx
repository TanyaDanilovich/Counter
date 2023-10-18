import React, {useState} from 'react'
import SettingInput from '../../features/SettingInput/SettingInput';
import styled from 'styled-components';
import styles from './Setting.module.css'
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {counterSelector, errorSelector} from '../../redux/selectors';
import {CounterSettingType, CounterType, setCounterDataAC, setNewSettingDataAC} from '../../redux/counterReducer';
import {removeErrorAC, removeValueErrorAC} from '../../redux/errorReducer';
import AppButton from '../../shared';
import {Controller, RegisterOptions, set, useForm} from 'react-hook-form';


export type SettingPropsType = {
    setCounterMode: () => void
}


const Setting = ({setCounterMode}: SettingPropsType) => {
    const counter = useAppSelector(counterSelector)

    // console.log(counter)

    const dispatch = useAppDispatch()

    const setButtonCallback = () => {
        dispatch(setNewSettingDataAC(minValue, maxValue, step))
        dispatch(removeValueErrorAC())
        setCounterMode()
    }


    const {
        reset,
        control,
        watch,
        setValue,
        handleSubmit,
        formState: {errors, isValid},
    } = useForm<CounterSettingType>({
        defaultValues: {
            max: counter.max,
            min: counter.min,
            step: counter.step
        },
        mode: 'all',
    });

    const onSubmit = handleSubmit(data => {
        dispatch(setCounterDataAC(data.min, data.min, data.max, data.step))
        reset()
        console.log(data)
        dispatch(removeValueErrorAC())
        setCounterMode()
    });

    const maxValue = watch('max')
    const minValue = watch('min')
    const step = watch('step')

    console.log(errors)
    const maxValuerValidationRules: RegisterOptions = {
        min: {value: 0, message: "Positive number only!!!"},
        validate: {
            lessThanMin: (value) => value >= minValue || "Сannot be less or equal than MIN",
            lessThanStep: (value) => value >= step || "Сannot be less or equal than STEP"
        },
    }

    const minValuerValidationRules: RegisterOptions = {
        min: {value: 0, message: "Positive number only!!!"},
        validate: (value) => value < maxValue || "Сannot be greater or equal than MAX"
    }


    const stepValidationRules: RegisterOptions = {
        min: {value: 1, message: "More than 1 only!!!"}
    }
    return (

        <Wrapper>
            <form onSubmit = {onSubmit} name = {'counter'}>
                <Border>


                    <Controller control = {control}
                                rules = {maxValuerValidationRules}
                                name = {"max"}
                                render = {({field}) => {
                                    return (
                                        <SettingInput title = {'max value'}
                                                      value = {maxValue}
                                                      callback = {(e) => {
                                                          delete errors.min
                                                          field.onChange(e)
                                                      }}
                                                      step = {step}/>)
                                }}/>

                    <div style = {{height: "15px"}}>
                        {errors && errors.max && <div className = {styles.error}>{errors.max.message}</div>}
                    </div>

                    <Controller control = {control}
                                rules = {minValuerValidationRules}
                                name = {"min"}
                                render = {({field}) => {
                                    return (
                                        <SettingInput title = {'min value'}
                                                      value = {minValue}
                                                      callback = {(e) => {

                                                          field.onChange(e)
                                                      }}
                                                      step = {step}/>)
                                }}/>


                    <div style = {{height: "15px"}}>
                        {errors && errors.min && <div className = {styles.error}>{errors.min.message}</div>}
                    </div>

                    <Controller control = {control}
                                rules = {stepValidationRules}
                                name = {"step"}
                                render = {({field}) => {
                                    return (
                                        <SettingInput title = {'step'}
                                                      value = {step}
                                                      callback = {(e) => {
                                                          setValue("max", e + minValue)
                                                          field.onChange(e)
                                                      }}
                                                      step = {1}/>)
                                }}/>

                    <div style = {{height: "15px"}}>
                        {errors && errors.step && <div className = {styles.error}>{errors.step.message}</div>}
                    </div>

                </Border>
                <Border>
                    <AppButton title = {'set'} color = "blue" callback = {setButtonCallback}
                               disabled = {!isValid} type = {'submit'}/>
                    <input type = "submit" title = {'set'}/>
                </Border>
            </form>
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