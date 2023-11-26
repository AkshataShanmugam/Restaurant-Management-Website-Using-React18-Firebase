import React, { useState } from "react";
import logo from "../src/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import SpecialDishes from "../src/components/MenuCard.jsx";
import Footer from "../src/components/Footer.jsx";
import data from "../src/components/fullMenu.jsx";
import GetSignedInEmail from "./SignInCheck.jsx";

export default function MakeOrders() {
  const check = GetSignedInEmail();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const specials = data.map((item) => {
    return <SpecialDishes key={item.id} item={item} />;
  });

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    navigate(selectedValue);
  };

  const confirmAllOrder = () => {
    navigate("/confirmOrder");
    window.location.reload();
  };

  return (
    <div className="makeOrders--div">
      <nav>
        <div className="nav--div">
            <Link to="/">
              <img src={logo} alt="Logo" className="nav--logo" />
            </Link>
            <div className="nav--components">
              <select
                onChange={handleOptionChange}
                value={selectedOption}
                className="nav--select"
              >
                <option value="" disabled hidden>
                  More Options
                </option>
                <option value="/">HOME</option>
                <option value="/logout">LOG OUT</option>
                <option value="/checkOut">CHECK OUT</option>
              </select>
            </div>
          </div>
      </nav>
      <section className="cards-list">{specials}</section>
      <button className="button--navigate" onClick={confirmAllOrder}>
        CONFIRM ORDER
      </button>
      <Footer />
    </div>
  );
}
