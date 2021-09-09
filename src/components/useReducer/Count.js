import React, { useReducer } from 'react';


const ACTIONS = {
    INCREASE: 'increase',
    DECREASE: 'decrease'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREASE:
            return { count: state.count + 1 };
        case ACTIONS.DECREASE:
            return { count: state.count - 1 }

        default:
            return state
    }
}
export default function Count() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })


    function increment() {
        dispatch({ type: ACTIONS.INCREASE })
    }

    function decrement() {
        dispatch({ type: ACTIONS.DECREASE })
    }

    return (
        <>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}> Decrease</button>

            {state.count}
        </>
    )
}