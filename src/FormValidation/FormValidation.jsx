import React, { useState } from 'react'

const FormValidation = () => {
    const [newuser, setNewUser] = useState({
        id: crypto.randomUUID(),
        name: "",
        email: "",
    })
    const [user, setUser] = useState([])
    const [error, setError] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prev => (
            {
                ...prev,
                [name]: value,
            }
        ))
    }

    function validation(newuser) {
        const newError = {
            name: [],
            email: [],
        }
        if (!newuser.name.trim()) {
            newError.name.push("Name is Required");
        }
        if (newuser.name.trim().length < 6) {
            newError.name.push("Name Length should be above 5")
        }
        if (!newuser.email.trim()) {
            newError.email.push("Email is required")
        }
        if (!newuser.email.includes('@')) {
            newError.email.push("Email is not Valid")
        }
        setError(newError);
        return newError
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const allError = validation(newuser);
        if (allError.name.length == 0 && allError.email.length == 0) {
            setUser(prev => [...prev, newuser]);

            setNewUser({
                id: crypto.randomUUID(),
                name: "",
                email: "",
            })
        }
    }

    console.log(newuser);
    console.log(user);


    return (
        <div>
            <form action="">
                <label htmlFor="name"></label>
                <input type="text" name='name' id='name' value={newuser.name} onChange={handleChange} />
                {error.name && error.name.map((err, index) =>
                    (<div style={{ color: 'red' }} key={index}>{err}</div>))}
                <label htmlFor="email"></label>
                <input type="email" name='email' id='email' value={newuser.email} onChange={handleChange} />
                {error.email && error.email.map((err, index) =>
                    (<div style={{ color: 'red' }} key={index}>{err}</div>))}
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default FormValidation