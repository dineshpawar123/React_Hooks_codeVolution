import React from 'react'

function ButtonIncrementStateTwo({ handleStateTwo, children }) {

    console.log("in ", ButtonIncrementStateTwo)

    return (
        <button onClick={() => handleStateTwo()}>{children}</button>
    )
}

export default React.memo(ButtonIncrementStateTwo)
