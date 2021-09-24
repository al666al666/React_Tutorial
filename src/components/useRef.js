import React, { useState, useRef, useEffect } from 'react';
const UseRef = () => {
    const [name, setName] = useState('')
    const prevName = useRef('')
    const inputRef = useRef()


    const focus=()=>{
        inputRef.current.focus() // to focus => kindda useless
        inputRef.current.style.backgroundColor="yellow" // to access to DOM => no encouraged 
    }
    useEffect(() => {
            prevName.current =name  // hold previous state value => GOOD
    },[name])
    
    return (
        <>
            <input ref={inputRef} value={name} onClick={focus} onChange={e => setName(e.target.value)} />
            <div> My Name is {name} </div>
            <div> It used to be {prevName.current}</div>
        </>


    )
}

export default UseRef