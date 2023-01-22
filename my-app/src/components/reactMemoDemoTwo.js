import React from 'react'

function ReactMemoDemoTwo({ state1 }) {

    console.log("two");
    return (
        <div>
            in ReactMemoDemoTwo {state1}
        </div>
    )
}

export default React.memo(ReactMemoDemoTwo)
