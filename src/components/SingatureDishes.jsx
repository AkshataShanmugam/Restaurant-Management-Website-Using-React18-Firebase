import React from "react";
import star from '../images/star.png'

import appetizer from '../images/appetizer-platter.png'
import caesar from '../images/caesar-salad.png'
import spaghetti from '../images/spaghetti-and-meatballs.png'
import salmon from '../images/grilled-salmon.png'
import chocolava from '../images/chocolate-lava-cake.png'
import chickenMarsala from '../images/chicken-marsala.png';
import newYorkStripSteak from '../images/new-york-strip-steak.png';
import tiramisu from '../images/tiramisu.png';
import frenchOnionSoup from '../images/french-onion-soup.png';
import lobsterMacAndCheese from '../images/lobster-mac-and-cheese.png';
import filetMignon from '../images/filet-mignon.png';
import cremeBrulee from '../images/creme-brulee.png';

export default function Card(props) {

    let badgeText
    let image = "";
    // if (props.item.availability === 0) {
    //     badgeText = "SOLD OUT FOR THE EVENING"
    // }

    if ("/assets/" + props.item.coverImg+"" === appetizer) {
        image = appetizer
    } else if ("/assets/" + props.item.coverImg === caesar) {
        image = caesar
    } else if ("/assets/" + props.item.coverImg === spaghetti) {
        image = spaghetti
    } else if ("/assets/" + props.item.coverImg === salmon) {
        image = salmon
    } else if ("/assets/" + props.item.coverImg === chocolava) {
        image = chocolava
    } else if ("/assets/" + props.item.coverImg === chickenMarsala) {
        image = chickenMarsala;
      } else if ("/assets/" + props.item.coverImg === newYorkStripSteak) {
        image = newYorkStripSteak;
      } else if ("/assets/" + props.item.coverImg === tiramisu) {
        image = tiramisu;
      } else if ("/assets/" + props.item.coverImg === frenchOnionSoup) {
        image = frenchOnionSoup;
      } else if ("/assets/" + props.item.coverImg === lobsterMacAndCheese) {
        image = lobsterMacAndCheese;
      } else if ("/assets/" + props.item.coverImg === filetMignon) {
        image = filetMignon;
      } else if ("/assets/" + props.item.coverImg === cremeBrulee) {
        image = cremeBrulee;
      }

    console.log(image);

    return (
        <div className="card">
{/*             {badgeText && <div className="card--badge">{badgeText}</div>} */}
            <img src={image} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span> {props.item.stats.rating} </span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>   
            <p className="card--title">{props.item.description}</p>   
        </div>
    )
}
