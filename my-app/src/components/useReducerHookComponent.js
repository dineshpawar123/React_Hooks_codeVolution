import React, { useReducer } from 'react'

function UseReducerHookComponent() {

    const initialState = {
        fName: 'dinesh',
        lName: 'pawar',
        mobNumber: '1111111111'
    }

    const reducer = (state, action) => {

        switch (action.type) {
            case 'updateMobileNumber': return { ...state, 'mobNumber': '2222222222' }
            default: return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>
                First Name:{state.name} <br />
                Last Name:{state.lName} <br />
                Mobile Number:{state.mobNumber} <br />
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'updateMobileNumber' })}>update Mobile Number</button>
            </div>
        </div>
    )
}

export default UseReducerHookComponent
