import { useState, useRef } from "react";
import "./MultiStepProgressBar.css";

const MultiStepProgressBar = () => {

    const division = useRef(9);
    const [pos, setPos] = useState(0);
    console.log(pos);
    
    const handlePrevious = () => {
        if (pos <= 0) {
            return;
        }
        else {
            setPos(prev => prev - 99/division.current)
        }
    }

    const handleNext = () => {
        if (pos >= 99) {
            return;
        }
        else {
            setPos(prev => prev + 99/division.current)
        }
    }

    return (
        <>
            <div className="progress_bar">
                <div className="progress_circle" style={{ left: `${pos}%` }}>

                </div>
            </div>
            <div className="btn_container">
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </>
    )
}

export default MultiStepProgressBar