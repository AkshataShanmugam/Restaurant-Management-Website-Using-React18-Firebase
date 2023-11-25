import React, { useState, useEffect } from "react";
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

import GetSignedInEmail from "../../pages/SignInCheck.jsx"


export default function Card(props) {
    const check = GetSignedInEmail();
    const initialCount = 0;

    const [count, setCount] = useState(initialCount);

    // Update the count to reflect the value stored in local storage
    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('menuItems')) || {};
        if (check in storedItems && props.item.id in storedItems[check]) {
            setCount(storedItems[check][props.item.id].count || 0);
        } else {
            setCount(0);
        }
    }, [check, props.item.id]);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
        setCount(count - 1);
        }
    };

  //   const handleConfirmOrder = () => {
  //     const item = {
  //         id: props.item.id,
  //         title: props.item.title,
  //         price: props.item.price,
  //         count,
  //         email: check
  //     };

  //     if (count > 0) {
  //         // Retrieving the existing items stored in local storage or initializing an empty object
  //         const storedItems = JSON.parse(localStorage.getItem('menuItems')) || {};

  //         // Using the email as the key to store all items
  //         if (check in storedItems) {
  //             const userEmailItems = storedItems[check];
  //             // Check if the item already exists in the user's stored items
  //             if (item.id in userEmailItems) {
  //                 // If the item exists, update the count for that particular item
  //                 userEmailItems[item.id].count += count;
  //             } else {
  //                 // If the item doesn't exist, add it to the user's stored items
  //                 userEmailItems[item.id] = item;
  //             }
  //         } else {
  //             // If the email doesn't exist, set a new entry for the user with their item
  //             storedItems[check] = { [item.id]: item };
  //         }

  //         // Store the updated dictionary back in local storage
  //         localStorage.setItem('menuItems', JSON.stringify(storedItems));
  //     }
  // };

    const handleConfirmOrder = () => {
      const item = {
          id: props.item.id,
          title: props.item.title,
          price: props.item.price,
          coverImg: props.item.coverImg,
          description: props.item.description,
          count,
      };
      console.log(item);

      if (count > 0) {
          // Retrieving the existing items stored in local storage or initializing an empty object
          const storedItems = JSON.parse(localStorage.getItem('menuItems')) || {};

          // Using the email as the key to store all items
          if (check in storedItems) {
              const userEmailItems = storedItems[check];
              // Check if the item already exists in the user's stored items
              if (item.id in userEmailItems) {
                  // If the item exists, set the count to the new count
                  userEmailItems[item.id].count = count;
              } else {
                  // If the item doesn't exist, add it to the user's stored items
                  userEmailItems[item.id] = item;
              }
          } else {
              // If the email doesn't exist, set a new entry for the user with their item
              storedItems[check] = { [item.id]: item };
          }

          // Store the updated dictionary back in local storage
          localStorage.setItem('menuItems', JSON.stringify(storedItems));
      }
    };


    const removeOrder = () => {
      const storedItems = JSON.parse(localStorage.getItem('menuItems')) || {};
      setCount(0);
      if (check in storedItems) {
          const userEmailItems = storedItems[check];
          if (props.item.id in userEmailItems) {
              delete userEmailItems[props.item.id]; // Removes the item from the user's stored items
          }
          
          // Update the stored data in local storage
          localStorage.setItem('menuItems', JSON.stringify(storedItems));
      }
    };

    // let badgeText
    let image
    // if (props.item.availability === 0) {
    //     badgeText = "SOLD OUT"
    // }

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
{/*           {badgeText && <div className="card--badge">{badgeText}</div>} */}
          <img src={image} className="card--image" />
          <div className="card--stats">
              <img src={star} className="card--star" />
              <span> {props.item.stats.rating} </span>
              <span className="gray">({props.item.stats.reviewCount}) • </span>
              <span className="gray">{props.item.location}</span>
          </div>
          <p className="card--title">{props.item.title}</p>
          <p className="card--title">{props.item.description}</p> 
          <p className="card--price"><span className="bold">${props.item.price}</span></p>
          <div>
            <p className="card--counter"><span className="bold">Order: {count}</span></p>
            <div className = "card--buttons">
                    <button className="card--button"  onClick={handleIncrement}>+</button>
                    <button className="card--button"  onClick={handleDecrement}>-</button>
            </div>
            <div className="button-confirm">
                <button className="button--div" onClick={handleConfirmOrder}> UPDATE </button>
                <button className="button--div" onClick={removeOrder}> REMOVE ITEM </button>
            </div>
          </div>    
      </div>
    )
}
