import React from "react";
import { useState } from "react";

const UserForm = props => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        console.log( newUser );
    }

    return (
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" onChange={ ( e ) => setFirstName( e.target.value ) } value={ firstname } />
                    <br></br>
                    {
                        firstname.length  < 2 && firstname.length > 0 ? "First Name must be at least 2 characters" : null
                    }
                    <br></br>
                </div>
                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" onChange={ (e) => setLastName( e.target.value ) } value={ lastname } />
                    <br></br>
                    {
                        lastname.length < 2 && lastname.length > 0 ? "Last Name must be at least 2 characters" : null
                    }
                    <br></br>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" onChange={ ( e ) => setEmail( e.target.value ) } value={ email } />
                    <br></br>
                    {
                        email.length < 5 && email.length > 0? "Email must be at least 5 characters" : null
                    }
                    <br></br>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={ ( e ) => setPassword( e.target.value ) } value={ password } autoComplete="off" />
                    <br></br>
                    {
                        password.length < 8 && password.length>0 ? "Password must be at least 8 characters " : null
                    }
                    <br></br>
                </div>
                <div>
                    <label htmlFor="confirmpassword">Confirm Password:</label>
                    <input type="password" onChange={ ( e ) => setConfirmPassword( e.target.value ) } value={ confirmpassword } autoComplete="off" />
                    <br></br>
                    {
                        password == confirmpassword ? true : "Password must match"
                    }

                    <br></br>
                </div>
            </form>
            <div>
                <h2>Your Data Form</h2>
                <p>First Name: { firstname }</p>
                <p>Last Name: { lastname } </p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirmpassword }</p>
            </div>
        </div>
    );
}

export default UserForm;