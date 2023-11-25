import React from "react";
import star from '../src/images/star.png'

import appetizer from '../src/images/appetizer-platter.png'
import caesar from '../src/images/caesar-salad.png'
import spaghetti from '../src/images/spaghetti-and-meatballs.png'
import salmon from '../src/images/grilled-salmon.png'
import chocolava from '../src/images/chocolate-lava-cake.png'
import chickenMarsala from '../src/images/chicken-marsala.png';
import newYorkStripSteak from '../src/images/new-york-strip-steak.png';
import tiramisu from '../src/images/tiramisu.png';
import frenchOnionSoup from '../src/images/french-onion-soup.png';
import lobsterMacAndCheese from '../src/images/lobster-mac-and-cheese.png';
import filetMignon from '../src/images/filet-mignon.png';
import cremeBrulee from '../src/images/creme-brulee.png';


export default function displayOrders(props) {
    console.log(props.item.title)
    let image;

    if ("/assets/" + props.item.coverImg === appetizer) {
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

      return (
        <div className="card">
            <img src={image} className="card--image" />
            <p className="card--title">{props.item.title}</p>   
            <p className="card--title">{props.item.description}</p>   
            <p className="card--price"><span className="bold">${props.item.price}</span></p>
            <p className="card--price"><span className="bold">Number of orders: {props.item.count}</span></p>
        </div>
    )
    // const storedItems = JSON.parse(localStorage.getItem('menuItems')) || {};
    // const props = storedItems; 
    // const temp = Object.values(props);

    // for (let key in temp){
    //     console.log("each?", key, temp[key]);
    //     let image = "";

    //     if ("/src/images/" + temp[key].coverImg === appetizer) {
    //         image = appetizer
    //     } else if ("/src/images/" + temp[key].coverImg === caesar) {
    //         image = caesar
    //     } else if ("/src/images/" + temp[key].coverImg === spaghetti) {
    //         image = spaghetti
    //     } else if ("/src/images/" + temp[key].coverImg === salmon) {
    //         image = salmon
    //     } else if ("/src/images/" + temp[key].coverImg === chocolava) {
    //         image = chocolava
    //     } else if ("/src/images/" + temp[key].coverImg === chickenMarsala) {
    //         image = chickenMarsala;
    //     } else if ("/src/images/" + temp[key].coverImg === newYorkStripSteak) {
    //         image = newYorkStripSteak;
    //     } else if ("/src/images/" + temp[key].coverImg === tiramisu) {
    //         image = tiramisu;
    //     } else if ("/src/images/" + temp[key].coverImg === frenchOnionSoup) {
    //         image = frenchOnionSoup;
    //     } else if ("/src/images/" + temp[key].coverImg === lobsterMacAndCheese) {
    //         image = lobsterMacAndCheese;
    //     } else if ("/src/images/" + temp[key].coverImg === filetMignon) {
    //         image = filetMignon;
    //     } else if ("/src/images/" + temp[key].coverImg === cremeBrulee) {
    //         image = cremeBrulee;
    //     }

    //     return (
    //         <div className="card">
    //             <img src={image} className="card--image" />
    //             <div className="card--stats">
    //                 <img src={star} className="card--star" />
    //                 <span className="gray">{temp[key].location}</span>
    //             </div>
    //             <p className="card--title">{temp[key].title}</p>
    //             <p className="card--title">{temp[key].description}</p> 
    //             <p className="card--price"><span className="bold">${temp[key].price}</span></p>   
    //             <p className="card--price"><span className="bold">COUNT: {temp[key].count}</span></p>     
    //         </div>
    // )
    // }
}
