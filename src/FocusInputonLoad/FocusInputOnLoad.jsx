import { useEffect, useRef, useState } from "react"

const FocusInputOnLoad = () => {
    const [input, setInput] = useState("")
    const [allname, setAllname] = useState([]);
    const inputref = useRef(null);

    const handleChange = (e) => {
        const { value } = e.target;
        setInput(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAllname(prev => [...prev, input]);
        setInput("");

    }

    useEffect(() => {
        inputref.current.focus();
    }, [])

    console.log(allname);

    return (
        <div>
            <form action="">
                <label htmlFor="name">Enter Name</label>
                <input ref={inputref} type="name" name="name" id="name" placeholder="Type here..." value={input} onChange={handleChange} />
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default FocusInputOnLoad