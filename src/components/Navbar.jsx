import React, { useState } from "react";
import logo from "../images/logo.png";
import GetSignedInEmail from "../../pages/SignInCheck.jsx";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const check = GetSignedInEmail();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    navigate(selectedValue);
  };

  if (check) {
    return (
      <nav>
        <div className="nav--div">
          <img src={logo} className="nav--logo" />
          <div className="nav--components">
            <select onChange={handleOptionChange} value={selectedOption} className="nav--select">
              <option value="" disabled hidden>More Options</option>
              <option value="/">HOME</option>
              <option value="/toOrder">TO ORDER</option>
              <option value="/logout">LOG OUT</option>
              <option value="/checkOut">CHECK OUT</option>
            </select>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className="nav--div">
          <img src={logo} className="nav--logo" />
          <div className="nav--components">
            <select onChange={handleOptionChange} value={selectedOption} className="nav--select">
              <option value="" disabled hidden>More Options</option>
              <option value="/">HOME</option>
              <option value="/toOrder">TO ORDER</option>
              <option value="/signup">SIGN UP</option>
              <option value="/signin">LOGIN</option>
            </select>
          </div>
        </div>
      </nav>
    );
  }
}
