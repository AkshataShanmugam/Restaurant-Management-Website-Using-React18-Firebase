import React from "react"
import hero from '../images/photo-grid.png'

export default function Hero() {
    return (
        <section className="hero">
            <img src={hero} className="hero--photo" />
            <div className ="hero--all-text">
                <h1 className="hero--header">Welcome to Comida!</h1>
                <br></br>
                <p className="hero--text">Where we serve delicious food that have the freshest ingredients and will tantalize your taste buds.</p>
                <br></br>
                <p className="hero--text">Some of our signature dishes</p>
            </div>
        </section>
    )
}