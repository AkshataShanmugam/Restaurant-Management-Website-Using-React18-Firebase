// import React, { useState } from "react";

// export default function Confirm(props) {
//     const [count, setCount] = useState(props.item.count);
//     const handleIncrement = () => {
//         setCount(count + 1);
//     };

//     const handleDecrement = () => {
//         if (count > 0) {
//         setCount(count - 1);
//         }
//     };

//     const handleConfirmOrder = () => {
//         const filteredItems = props.items.filter((item) => item.count > 0);
//         const jsonItems = JSON.stringify(filteredItems);
//         navigator.clipboard.writeText(jsonItems);
//     };

//     return (
//         <div>
//             <p className="card--counter"><span className="bold">Order: {count}</span></p>
//             <div className = "card--buttons">
//                     <button className="card--button"  onClick={handleIncrement}>+</button>
//                     <button className="card--button"  onClick={handleDecrement}>-</button>
//             </div>
//             <div>
//                 <button className="button-confirm"  onClick={handleConfirmOrder}>Confirm Order</button>
//             </div>
//         </div>
//     )
// }
      