import React from 'react';

const Pokecard = (props) => {
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    return (
        <div>
            <h4>{props.name}</h4>
            <img src={pic} alt='' ></img>
            <p>{props.type}</p>
        </div>
    )
}

export default Pokecard;