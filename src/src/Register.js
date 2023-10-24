import { useState } from "react";

export default function Register({handleSubmit}) {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleChange = (event) => {
        if (event.target.name == "registerName") {
            setUser(event.target.value);
        } else if (event.target.name == "registerPassword") {
            setPassword(event.target.value);
        } else if (event.target.name == "registerRepeat"){
            setRepeatPassword(event.target.value);
        }
    }

    const formSubmit = (e) => {
        e.preventDefault();
        handleSubmit(user)
    }

    return (
    <form onSubmit={formSubmit}>
        <label htmlFor="register-username">Username:</label>
        <input type="text" value={user} name="registerName" 
        onChange={handleChange}/>

        <label htmlFor="register-password">Password:</label>
        <input type="password" value={password} name="registerPassword" onChange={handleChange} />

        <label htmlFor="register-password-repeat">Repeat password:</label>
        <input type="password" value={repeatPassword}name="registerRepeat" 
        onChange={handleChange} />
        
        <input type="submit" value="Register" disabled={user&&(password==repeatPassword)&&password?false:true} />
    </form>
    )
}