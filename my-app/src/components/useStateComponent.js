import React, { useState } from 'react'

function UseStateComponent() {

    const [state, setstate] = useState(0)

    return (
        <div>
            <div>counter Value : {state}</div>
            <button onClick={() => setstate((state) => state + 1)}>increment</button>
            <button onClick={() => setstate((state) => state - 1)}>decrement</button>
            <button onClick={() => setstate(0)}>reset</button>
        </div>
    )
}

export default UseStateComponent
