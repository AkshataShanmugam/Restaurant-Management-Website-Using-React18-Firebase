import React from 'react'
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from "./firebase.jsx"
import { useNavigate } from "react-router-dom";
import Nav from "../src/components/Navbar.jsx"

export default function ForgotPassword() {
    
    const navigate = useNavigate();
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const email = e.target.email.value;
        sendPasswordResetEmail(auth, email).then(data => {
            alert("Resent password sent to email")
            navigate("/signin")
        }).catch(error => {
            alert(error.code);
        })
    }
    return (
        <div className="sign-in--div">
            <Nav />
            <div className="sign-in-container">
                <br />
                <h1>Forgot password to your Account</h1>
                <p className="login--instructions"> Please check your email after entering your password and submitting. You will be navigated to the login page.</p>
                <br />

                <form onSubmit = {(e) => handleSubmit(e)}>     
                <input
                    className="sign-in--input"
                    name="email"
                    placeholder="Enter your email"
                />
                <br />
                <br />
                <button className="toOrder--links">
                    Send verification email
                </button>
                <br />
                </form>
                <br />
            </div>
        </div>
        
    );
}
