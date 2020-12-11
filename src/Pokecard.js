import React from 'react';
import './Pokecard.css'

const Pokecard = (props) => {
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return (
        <div className='Pokecard'>
            <h4>{props.name}</h4>
            <img src={pic} alt=''></img>
            <p>Type: {props.type}</p>
            <p>EXP: {props.exp}</p>
        </div>
    )
}

export default Pokecard;