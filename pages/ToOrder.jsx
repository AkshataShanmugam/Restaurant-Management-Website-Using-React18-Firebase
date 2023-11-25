import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import SpecialDishes from "../src/components/SingatureDishes.jsx"
import data from "../src/components/menu.jsx"
import Nav from "../src/components/Navbar.jsx"
import Footer from "../src/components/Footer.jsx"
import GetSignedInEmail from "./SignInCheck.jsx"

export default function ToOrder() {
    const check = GetSignedInEmail();
    console.log(check);
    
    const navigate = useNavigate();

    if (check){
        navigate("/placeOrder");
    } else{
        const specials = data.map(item => {
            return (
                <SpecialDishes
                    key={item.id}
                    item={item}
                />
            )
        }) 
        return (
            <div>
                <Nav />
                <div className='toOrder'>
                    <div className="orderDetails">
                        <h1>To order, please login or sign up</h1>
                        <div className="toOrder--div">
                        <Link className = "toOrder--links" to = "/signup"> SIGN UP </Link>
                        <Link className = "toOrder--links" to = "/signin"> LOGIN </Link>
                        </div>
                        <br></br>
                        <br></br>
                        <h2>Explore our top-selling menu</h2>
                        <section className="cards-list">
                            {specials}
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
