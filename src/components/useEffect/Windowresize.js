import React, { useEffect, useState } from 'react' ; 

export default function Windowresize() {

    const [windowWidth, setwindowWidth] = useState(window.innerWidth)
    function handleResize(){
        setwindowWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize' , handleResize)
    },[windowWidth])
    return(
        <>
        {windowWidth}
        </>
    )
}