import React, { useContext } from 'react';
import { UserContext } from './contextDemo';

function ContextDemoSecond() {

    const context = useContext(UserContext)

    return (
        <div>
            <b>From contextDemo 2 file</b> {context.name}<br />
            <b>Todays date is</b> {context.date}
        </div>
    )
}

export default ContextDemoSecond
