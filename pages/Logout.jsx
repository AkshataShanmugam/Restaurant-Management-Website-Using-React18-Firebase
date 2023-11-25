import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "./firebase";
import Navbar from "../src/components/Navbar.jsx";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const userSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log("sign out successful");
            localStorage.setItem('emailId', JSON.stringify([]));
            navigate("/");
        })
        .catch((error) => console.log(error));
    };

    const cancel = () => {
        navigate("/");
    };

    return (
        <div className="sign-in--div">
            <Navbar />
            <div className="log-out-container">
                <h2>Confirm sign out?</h2>
                {/* <h4>Your current order history will get cancelled</h4> */}
                <button className="toOrder--links" onClick={userSignOut}>Sign Out</button>
                <button className="toOrder--links" onClick={cancel}>Return Home</button>
            </div>
        </div>
    );
    
};

export default Logout;
