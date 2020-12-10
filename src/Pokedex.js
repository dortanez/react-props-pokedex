import React from 'react';
import Pokecard from './Pokecard';

const Pokedex = (props) => {
    return (
        <div className='Pokedex'>
            {props.cards.map((c) => {
                <Pokecard 
                    id={c.id} 
                    name={c.name} 
                    type={c.type} 
                    exp={c.base_experience}
                />
            })}
            
        </div>
        
    )
}

export {Pokedex};