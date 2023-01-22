import React from 'react'

function ReactMemoDemoOne({ state }) {

    console.log("one");
    return (
        <div>
            in ReactMemoDemoOne {state}
        </div>
    )
}

export default React.memo(ReactMemoDemoOne)
