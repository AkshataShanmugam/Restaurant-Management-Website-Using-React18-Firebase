import React from 'react';
import animation from "../src/images/CSS Burger loading animation [GIF].gif"
import "./OrderSuccess.css"
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  const CheckOut = () => {
    navigate("/checkOut");
  };

  return (
    <div className="order-success-container">
      <h1> Your order is confirmed! </h1>
      <h2> Your order is getting prepared by the top chefs of the town, and you will be served hot food soon. </h2>
      <img src ={animation} alt = "GIF of burger being being assembled" />
      <button className="toOrder--links" onClick={home}>Return Home</button>
      <button className="toOrder--links" onClick={CheckOut}>See summary of orders</button>
    </div>
  );
}

export default OrderSuccess;
