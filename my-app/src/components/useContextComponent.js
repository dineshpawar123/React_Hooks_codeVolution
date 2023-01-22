import React from 'react';
import { UserContext } from './contextDemo';
import ContextDemoSecond from './contextDemoSecond';

function UseContextComponent() {
    const message = "This is message";
    return (
        <UserContext.Provider value={{ name: message, date: Date() }}>
            <div>
                {message}
                <ContextDemoSecond />
            </div>
        </UserContext.Provider>
    )
}

export default UseContextComponent
