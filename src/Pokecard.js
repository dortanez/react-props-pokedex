import React from 'react';

const Pokecard = (props) => {
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return (
        <div>
            <h4>{props.name}</h4>
            <img src={pic} alt=''></img>
            <p>Type: {props.type}</p>
            <p>EXP: {props.base_experience}</p>
        </div>
    )
}

export default Pokecard;