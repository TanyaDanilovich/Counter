import React from 'react';
import style from './AppButton.module.css'

export type ButtonPropsType = {
    title: string
    color: string
    callback: () => void
    disabled: boolean
    type?: 'submit' | 'reset' | 'button' | undefined;
}


function AppButton({title, color, callback, disabled, type}: ButtonPropsType) {
    const onClickButtonHandler = () => {
        callback()
    }

    return (
        <button className = {style.appButton} type = {type}
                onClick = {onClickButtonHandler}
                disabled = {disabled}>
            {title}
        </button>
    );
}

export default AppButton;
