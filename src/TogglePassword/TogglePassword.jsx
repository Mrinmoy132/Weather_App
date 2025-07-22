import React, { useRef, useState } from 'react'

const TogglePassword = () => {

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef();

    const handleChange = (e) => {
        setPassword(e.target.value)
    }

    const handleClick = () => {
        setShowPassword(prev=>!prev);
    }
    return (
        <div>
            <form action="">
                <label htmlFor='password'>Enter New Password</label>
                <input type={showPassword?"password":"type"} name='password' id='password' value={password} onChange={handleChange} ref={inputRef} />
            </form>
            <button onClick={handleClick}>{showPassword ? "Show" : "Hide"}</button>
        </div>
    )
}

export default TogglePassword