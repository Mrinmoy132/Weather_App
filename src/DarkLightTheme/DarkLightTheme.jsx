import React, { useState, useRef, useEffect } from 'react'

const DarkLightTheme = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const darkmode = JSON.parse(localStorage.getItem("dark"))
        if (darkmode !== null) {
            setDark(darkmode);
        }
    }, [])

    useEffect(() => {
        document.body.style.backgroundColor = (dark ? 'black' : 'white');
        document.body.style.color = dark ? 'white' : 'black';
        localStorage.setItem("dark", JSON.stringify(dark))
    }, [dark])

    const toggleSwitch = () => {
        setDark(prev => !prev);
    }

    return (
        <div>
            <button onClick={toggleSwitch}>{dark ? "LightMode" : "DarkMode"}</button>
        </div>
    )
}

export default DarkLightTheme