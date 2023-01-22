import React, { useCallback, useState, useMemo } from 'react'
import ReactMemoDemoOne from './reactMemoDemoOne'
import ReactMemoDemoTwo from './reactMemoDemoTwo'
import ButtonIncrementStateOne from './buttonIncrementStateOne'
import ButtonIncrementStateTwo from './buttonIncrementStateTwo'

function ReactMemoDemo() {

    const [state, setstate] = useState(0)
    const [state1, setstate1] = useState(0)

    //useCall back
    const handleState = useCallback(() => {
        setstate(state + 1)
        console.log("In handle state one")
    }, [state])

    const handleStateTwo = useCallback(() => {
        setstate1(state1 + 1)
        console.log("In handle state TWo")
    }, [state1])

    // const handleStateNew = () => {
    //     setstate(state + 1)
    //     console.log("In handle state one")
    // }

    // const handleStateTwoNew = () => {
    //     setstate1(state1 + 1)
    //     console.log("In handle state TWo")
    // }

    const veryBigFunction = useMemo(() => {
        for (var i = 0; i <= 10000; i++) {
            console.log("=>", i)
        }
    }, [state])

    return (
        <div>
            <ReactMemoDemoOne state={state} />
            <ReactMemoDemoTwo state1={state1} />
            <div>
                <button onClick={() => handleState()}>increment state one {state}</button>
                <button onClick={() => handleStateTwo()}>increment state two {state1}</button><br />
                <ButtonIncrementStateOne handleState={handleState}>increment state one</ButtonIncrementStateOne>
                <ButtonIncrementStateTwo handleStateTwo={handleStateTwo}>increment state Two</ButtonIncrementStateTwo>
            </div>
            {/* {veryBigFunction} */}
        </div>
    )
}

export default ReactMemoDemo
