import React, { useState, useEffect } from 'react'

function UseEffectComponent() {

    const [state, setstate] = useState(0)

    useEffect(() => {
        setstate((state) => state + 100)
        return () => {
            // cleanup
        }
    }, [])

    return (
        <div>
            <div>counter Value : {state}</div>
            <button onClick={() => setstate((state) => state + 1)}>increment</button>
            <button onClick={() => setstate((state) => state - 1)}>decrement</button>
            <button onClick={() => setstate(0)}>reset</button>
        </div>
    )
}

export default UseEffectComponent
