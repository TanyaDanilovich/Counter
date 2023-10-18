import React from 'react';
import style from './AppButton.module.css'

export type ButtonPropsType = {
    title: string
    color: string
    callback?: () => void
    disabled: boolean
}


function AppButton({title, color, callback, disabled}: ButtonPropsType) {
    const onClickButtonHandler = () => {
        if (callback) callback()
    }

    return (
        <button className = {style.appButton}
                onClick = {onClickButtonHandler}
                disabled = {disabled}>
            {title}
        </button>
    );
}

export default AppButton;
