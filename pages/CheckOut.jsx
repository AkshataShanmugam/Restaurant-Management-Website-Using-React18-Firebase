import SpecialDishes from "./CheckOutOrders.jsx"
import Data from "./CheckOutData.jsx"
import MakePayment from "./MakePayment.jsx";
import React, { useState }  from 'react';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from "../src/images/logo.png";

const CheckOut = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const currentPath = location.pathname;

    const [selectedOption, setSelectedOption] = useState("");
    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        navigate(selectedValue);
    };

    const returnToPage = () => {
        navigate("/")
    }
    
    const returnToPayment = () => {
        navigate("/makePayment")
    }

    function flattenDictionary(dict) {
        const result = [];
        
        for (const key1 in dict) {
            const level1 = dict[key1];
            for (const key2 in level1) {
                const level2 = level1[key2];
                if (level2.hasOwnProperty("id") && level2.hasOwnProperty("title")) {
                    result.push({ "id": level2.id, "title": level2.title, "count": level2.count, "coverImg": level2.coverImg, "description":level2.description, "price":level2.price });
                } else {
                    for (const key3 in level2) {
                        const level3 = level2[key3];
                        result.push({ "id": level3.id, "title": level3.title, "count": level3.count, "coverImg": level3.coverImg, "description":level3.description, "price":level3.price });
                    }
                }
            }
        }
        
        return result;
    }

    const StorageData = Data();
    const data = JSON.parse(localStorage.getItem('checkOutItems')) || [];
    
    const temp = flattenDictionary(Object.values(Object.values(data)));
    // console.log("temp:", temp);
    // console.log("special", temp.length);
    if (temp.length === 0){
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
                            value={currentPath}
                            className="nav--select"
                        >
                            <option value="/checkOut">CHECK OUT</option>
                            <option value="/">HOME</option>
                            <option value="/logout">LOG OUT</option>
                            <option value="/placeOrder">PLACE ORDERS</option>
                        </select>
                        </div>
                    </div>
                </nav>
                <h1 className="checkOut--null-text">Let's order some food!</h1>
                <button className="button--navigate" onClick={returnToPage}> RETURN HOME </button>
            </div>
        )

    } else { 
        localStorage.setItem('checkOutTotalPrice', JSON.stringify(0));

        let count = 0
        const specials = (temp).map(item => {
            count += 1
            return (
                <SpecialDishes
                    key={count}
                    item={item}
                />
            )
        }) 

        let price = JSON.parse(localStorage.getItem('checkOutTotalPriceFinal'));

        return (
            <div>
                <nav>
                    <div className='nav--div'>
                        <Link to="/">
                            <img src={logo} alt="Logo" className="nav--logo" />
                        </Link><div className="nav--components">
                        <select
                            onChange={handleOptionChange}
                            value={currentPath}
                            className="nav--select"
                        >
                            <option value="/checkOut">CHECK OUT</option>
                            <option value="/">HOME</option>
                            <option value="/logout">LOG OUT</option>
                            <option value="/placeOrder">PLACE ORDERS</option>
                        </select>
                        </div>
                    </div>
                </nav>
                <section className="cards-list">
                    {specials}
                </section>
                <button className="button--navigate"> Order total: $ {price} </button>
                <MakePayment />
            </div>
        )
    }
}

export default CheckOut
