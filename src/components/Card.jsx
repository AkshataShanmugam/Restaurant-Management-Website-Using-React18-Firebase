// import React from "react"
// import star from '../images/star.png'
// import kate from '../images/katie-zaferes.png'
// import mountain from '../images/mountain-bike.png'
// import wedding from '../images/wedding-photography.png'

// export default function Card(props) {
//     let badgeText
//     let image
//     if (props.item.openSpots === 0) {
//         badgeText = "SOLD OUT"
//     } else if (props.item.location === "Online") {
//         badgeText = "ONLINE"
//     }

//     if ("/src/images/" + props.item.coverImg === kate) {
//         image = kate
//     } else if ("/src/images/" + props.item.coverImg === mountain) {
//         image = mountain
//     } else if ("/src/images/" + props.item.coverImg === wedding) {
//         image = wedding
//     }

//     console.log(props, image)
    
//     return (
//         <div className="card">
//             {badgeText && <div className="card--badge">{badgeText}</div>}
//             <img src={image} className="card--image" />
//             <div className="card--stats">
//                 <img src={star} className="card--star" />
//                 <span>{props.item.stats.rating}</span>
//                 <span className="gray">({props.item.stats.reviewCount}) • </span>
//                 <span className="gray">{props.item.location}</span>
//             </div>
//             <p className="card--title">{props.item.title}</p>
//             <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
//         </div>
//     )
// }