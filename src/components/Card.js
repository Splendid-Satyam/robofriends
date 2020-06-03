import React from 'react';
import './Card.css';
const Card = ({name, email, id})  =>
{
    return (
        <div  className ='bg-light-green dib br3 pa3 ma2 tc grow bw2 shadow-5 '>
        <img alt= "Robots" src={`https://robohash.org/${id}`} />
        <h2>{name}</h2>
        <p>{email}</p>
        </div>
    )
}

export default Card;