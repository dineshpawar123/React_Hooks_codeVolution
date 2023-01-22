import React from 'react'

function ButtonIncrementStateOne({ handleState, children }) {
    console.log("in ", ButtonIncrementStateOne)
    return (
        <button onClick={() => handleState()}>{children}</button>
    )
}

export default React.memo(ButtonIncrementStateOne)
