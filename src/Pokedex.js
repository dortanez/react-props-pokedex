import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

const Pokedex = (props) => {
    let isWinner = null;
    if(props.isWinner) {
        isWinner = <p>THIS HAND WINS!</p>
    }
    return (
        <div className='Pokedex'>
            <h4>Player {props.player}</h4>
            <p>Total EXP: {props.exp}</p>
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
            <h4 className='Pokedex-isWinner'>{isWinner}</h4>
        </div>
        
    )
}

export default Pokedex;