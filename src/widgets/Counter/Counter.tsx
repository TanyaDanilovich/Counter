import React from 'react';
import styled from 'styled-components';
import SwitchButtons from '../../features/SwitchButton/SwitchButtons';
import Display from '../../features/Display/Display';


export type CounterPropsType = {
    setSettingMode: () => void
    isSettingMode: boolean
}

function Counter({setSettingMode, isSettingMode}: CounterPropsType) {

    return (
        <Wrapper>

            <Display isSettingMode = {isSettingMode}/>

            <SwitchButtons
                isSettingMode = {isSettingMode}
                setCallback = {setSettingMode}
            />

        </Wrapper>
    );
}

export default Counter;

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