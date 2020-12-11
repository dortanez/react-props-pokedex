import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

const Pokedex = (props) => {
    return (
        <div className='Pokedex'>
            <h4>Player {props.player}</h4>
            <p>Total EXP: {props.cards.reduce((acc, n) => {
                return acc + n.base_experience
            },0)}
            </p>
            <div className='Pokedex-cards'>
                {props.cards.map((c) => {
                    return <Pokecard 
                        id={c.id} 
                        name={c.name} 
                        type={c.type} 
                        exp={c.base_experience}
                        key={c.id}
                    />
                })}
            </div>
            
        </div>
        
    )
}

export default Pokedex;