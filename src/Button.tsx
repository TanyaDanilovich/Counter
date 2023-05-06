import React from 'react';
import styled from 'styled-components'

export type ButtonPropsType = {
    title: string
    color: string
    callback: () => void
    disabled?: boolean
}


function Button({title, color, callback, disabled}: ButtonPropsType) {
    const onClickButtonHandler = () => {
        callback()
    }

    return (
        <SimpleButton onClick = {onClickButtonHandler} disabled = {disabled}>
            {title}
        </SimpleButton>
    );
}

export default Button;
const SimpleButton = styled.button`
  font-size: 40px;
  font-weight: 700;
  border-radius: 7px;
  margin: 10px;
  padding: 5px 15px;
  background-color: #61dafb;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  border: 3px solid transparent;
  display: inline;

  :hover {
    border: 3px solid #1e697e;
  }

  :active {
    background-color: #02d0fd;
    color: rgba(0, 0, 0, 0.4);
  }

  :disabled {
    background-color: #dbe4e7;
    color: rgba(0, 0, 0, 0.4);
  }

  :disabled:hover {
    border: 3px solid transparent;
    cursor: not-allowed;
`