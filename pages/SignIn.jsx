import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import Nav from "../src/components/Navbar";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [tableNumber, setTableNumber] = useState("");
  const handleInputChange = (e) => {
    setTableNumber(e.target.value);
    console.log("Current tableNumber:", e.target.value);
    localStorage.setItem('tableNumber', JSON.stringify(e.target.value));
  };
  
  let emailID = ""
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate("/forgotPassword");
  };

  const navigateToSignUp = () => {
    navigate("/signUp");
  };
  
  const signIn = (e) => {
    e.preventDefault();
    console.log("pass", password)
    if (!email && !password && !tableNumber) {
      alert('Please fill in all fields.');
    } else if (!email){
      alert('Please fill in email ID');
    } else if (!regex.test(email)) {
      alert('Please enter a valid email address');
    } else if(!password){
      alert('Please fill in password')
    } else if (password.length < 6) {
      alert('Password must be at least 6 characters long');
    } else if(!tableNumber){
      alert('Please fill in table number')
    } else if(!/^\d+$/.test(tableNumber) || (tableNumber < 1)){
      alert('Please fill in an integer table number')
    } else{ 
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            alert("User successfully logged in!");
            emailID = email;
            localStorage.setItem('emailId', JSON.stringify(email));
            navigate("/placeOrder");
          })
          .catch((error) => {
            console.log(error);
          emailID = null; 
            if (error.code === "auth/invalid-login-credentials"){
              alert("Wrong email or password.");
            } else if (error.code === "auth/too-many-requests"){
              alert("Access to this account has been temporarily disabled due to many failed attempts. You can immediately restore it by resetting your password or you can try again later.");
            } else {
              alert("An error occurred while signing in. ", error.code);
            }
          });
          return emailID;
    }
  };

  return (
    <div className="sign-in--div">
      <Nav />
      <div className="sign-in-container">
        <form onSubmit={signIn}>
          <br></br>
          <h1>Login to your Account</h1>
          <p className="login--instructions"> Welcome back! Continue exploring Comida. </p>
          <input
            className="sign-in--input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br>
          <input
            className="sign-in--input"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br></br>
          <input
              className="sign-in--input"
              type="tableNumber"
              placeholder="Assigned table number"
              value={tableNumber}
              onChange={handleInputChange}/>
          <br></br>
          <button className="toOrder--links" type="submit"> Log In! </button>
          <br></br>
        </form>
        <button className="toOrder--links" onClick={navigateToPage}>Forgot Password</button>
        <br></br>
        <br></br>
        <br></br>
        <button className="toOrder--links" onClick={navigateToSignUp}>Sign Up Instead?</button>
      </div>
    </div>
  );
};

export default SignIn;
