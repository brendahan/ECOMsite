import React from 'react'
import './Card.css'
import hearticon from '../Assets/images/kitenge/hearticon.png'

function Card(props) {
    return (
        <div className='card'>
            <img className='productImg' src={props.image} alt='clothes'/>
<p className='productName'>{props.name}</p><h2 className='productPrice'>{props.price}</h2>
<img className='heart-icon' src={hearticon} alt='Girldress'/>
        </div>
    )
}

export default Card
