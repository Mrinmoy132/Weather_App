import { useState } from "react";


const DynamicBackground = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
    }

    const red = Math.floor(Math.random()*(256))
    const green = Math.floor(Math.random()*(256))
    const blue = Math.floor(Math.random()*(256))

    return (
        <div style={{height:'100vh', backgroundColor:`rgb(${red},${green},${blue})`}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%', flexDirection:'column'}}>
                <button onClick={handleClick}>Click</button>
                <div style={{color:'white'}}>{count}</div>
            </div>
        </div>
    )
}

export default DynamicBackground;