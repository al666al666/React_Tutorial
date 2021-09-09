import React from 'react' ; 


const myStyle = {
    width:"1000px" ,
    color: "#fff" ,
    border:"1px solid white",
    padding:"20px 20px "
}
export  function Home(){
    return <h1 style={myStyle}> This is Home</h1>
}

export  function Services(){
    return <h1 style={myStyle}> This is Services</h1>
}

export  function Information(){
    return <h1 style={myStyle}> This is Information</h1>
}

export  function Contact(){
    return <h1 style={myStyle}> This is Contact</h1>
}