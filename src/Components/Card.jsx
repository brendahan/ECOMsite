import React from 'react'
import './Card.css'
import hearticon from '../Assets/images/kitenge/hearticon.png'

function Card(props) {
    return (
        <div className='card'>
            <a href=''><img className='productImg' src={props.image} /></a>
<p className='productName'>{props.name}</p><h2 className='productPrice'>{props.price}</h2>
<a href=""><img className='heart-icon' src={hearticon} alt='Girldress'/></a>  
        </div>
    )
}

export default Card
