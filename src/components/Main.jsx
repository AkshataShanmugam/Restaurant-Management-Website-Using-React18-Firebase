import React, {useState, useEffect} from "react"
import Navbar from "./Navbar.jsx"
import Hero from "./Hero.jsx"
import SpecialDishes from "./SingatureDishes.jsx"
import AboutUs from "./AboutUs.jsx"
import Footer from "./Footer.jsx"
import PreLoader from "../../pages/PreLoader.jsx"
import data from "./menu.jsx"

export default function Main() {

    const [firstVisit, setFirstVisit] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem("hasVisitedMainPage");

        if (!hasVisited) {
        localStorage.setItem("hasVisitedMainPage", "true");
        setFirstVisit(true);
        }
    }, []);

    const specials = data.map(item => {
        return (
            <SpecialDishes
                key={item.id}
                item={item}
            />
        )
    })  
    
    // const menuItems = data.map(item => {
    //     return (
    //         <Confirm
    //             key={item.id}
    //             item={item}
    //         />
    //     )
    // }) 

    return (
        <div>
            {firstVisit && <PreLoader />}
            {/* <PreLoader /> */}
            <Navbar />
            <Hero />
            <section className="cards-list">
                {specials}
            </section>
            {/* <section className="cards-list">
                {menuItems}
            </section> */}
            <AboutUs />
            <Footer />
        </div>
    )

}