import { useEffect, useState } from "react";

const LiveClock = () => {

    const [currentTime, setCurrentTime] = useState({
        hr: "HH",
        min: "MM",
        sec: "SS",
        ap: "AM/PM"
    });

    useEffect(() => {

        const interval = setInterval(() => {
            let date = new Date(Date.now());
            let ampm;
            let hour = date.getHours();
            let mins = date.getMinutes();
            let secs = date.getSeconds();

            ampm = hour > 12 ? "PM" : "AM";
            hour = hour > 12 ? hour - 12 : hour;

            setCurrentTime({
                hr: hour.toString().padStart(2, "0"),
                min: mins.toString().padStart(2, "0"),
                sec: secs.toString().padStart(2, "0"),
                ap: ampm,
            })
            return () => clearInterval(interval);
        }, 1000)

    }, [])

    return (
        <>
            <h1 style={{fontFamily: 'sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:'50px', margin:'20px 0px' }}>Your Time</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '60px', fontFamily: 'sans-serif', fontWeight:'bold'}}>
                <h1>{currentTime.hr}</h1> : 
                <h1>{currentTime.min}</h1> : 
                <h1>{currentTime.sec}</h1>
                <h1 style={{color:'tomato'}}>{currentTime.ap}</h1>
            </div>
        </>
    )
}

export default LiveClock;