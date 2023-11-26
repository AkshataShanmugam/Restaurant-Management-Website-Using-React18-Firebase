import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../src/images/logo.png";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

import SpecialDishes from "./displayOrders.jsx"
import data from "./ConfirmMenuItems.jsx"

const ConfirmOrder = () => {

    const navigate = useNavigate();
    const storedItems = JSON.parse(localStorage.getItem('menuItems')) || {};
    const userOrder = storedItems; 
    
    const specials = data.map(item => {
        return (
            <SpecialDishes
                key={item.id}
                item={item}
            />
        )
    }) 

    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        navigate(selectedValue);
    };


    const returnToPage = () => {
        navigate("/placeOrder");
    };

    function removeLocalStorage() {
        localStorage.removeItem('menuItems');
    }

    const confirmOrder = () => {
    
        const appSettings = {
            databaseURL: "https://restaurant-management-v18-default-rtdb.firebaseio.com/"
        };
    
        const app = initializeApp(appSettings);
        const database = getDatabase(app);
        const menuItemsInDB = ref(database, "menuItems");

        // const string =  Object.keys(userOrder);
        // const new_key = string[0].replace(/[.#$\/[\]]/g, "*");
        const table = JSON.parse(localStorage.getItem('tableNumber')) || {};
        const value = Object.values(userOrder);
        const object = Object.assign({}, { [table]: value });

        console.log(object);

    
        if (userOrder) {
            push(menuItemsInDB, object);
        } 

        removeLocalStorage();
        navigate("/orderSuccess");

    };
    

    return (
        <div>
            <nav>
                <div className='nav--div'>
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
            <section className="cards-list">
                {specials}
            </section>
            <button className="button--navigate" onClick={returnToPage}> RETURN TO ORDERS </button>
            <button className="button--navigate" onClick={confirmOrder}> CONFIRM ORDER </button>
        </div>
    )
}

export default ConfirmOrder
