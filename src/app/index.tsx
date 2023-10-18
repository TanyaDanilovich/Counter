import React, {useState} from 'react';
import './index.css';
import './App.css';
import {Counter, Setting} from '../widgets';


function App() {
    // console.log("rerender App")

    let newState = null

    const storageStateAsString = localStorage.getItem('counter_State')
    if (storageStateAsString !== null) {
        newState = JSON.parse(storageStateAsString)
    }


    const [isSettingMode, setIsSettingMode] = useState<boolean>(false)

    // useEffect(() => {
    //
    //         //check value Error
    //         let rest = (state.max - state.min) % state.addition
    //         rest === 0
    //             ? state.value === state.max
    //                 ? setStateError({...stateError, valueError: true})
    //                 : setStateError({...stateError, valueError: false})
    //             : state.value + rest === state.max
    //                 ? setStateError({...stateError, valueError: true})
    //                 : setStateError({...stateError, valueError: false})
    //     }, [state]
    // )


    const setSettingMode = () => setIsSettingMode(true)
    const setCounterMode = () => setIsSettingMode(false)

//console.log(state.max)
    return (
        <div className = "App">
            {isSettingMode &&
                <Setting setCounterMode = {setCounterMode}/>}

            {!isSettingMode &&
                <Counter setSettingMode = {setSettingMode} isSettingMode={isSettingMode}/>}
        </div>
    );
}

export default App;
