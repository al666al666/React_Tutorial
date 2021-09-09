import React from 'react';
import {useThemeContext ,useThemeUpdateContext } from './ThemeContext'; 

 export default function FunctionContextComponent() {

    const darkTheme = useThemeContext();
    const toggleTheme = useThemeUpdateContext();
    const themeStyles = {
        backgroundColor: darkTheme ? " rgba(88, 0, 255, 1)" : "rgba(9, 8, 9, 1)",
        fontWeight: darkTheme ? "300" : "700",
        padding: "10px 10px",
        border: "1px solid black",
        color: "#fff",
        fontSize: "3rem"

    }
    return (
        <>
            <div style={themeStyles}> Hello world </div>
            <div style={{ margin: "10px" }}></div>
            <button onClick={toggleTheme}> Toggle Theme</button>
        </>
    )
}

