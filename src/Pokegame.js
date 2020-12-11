import React from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css';

const Pokegame = (props) => {
    const hand1 = [...props.pokemon];
    const hand2 = [];

    while(hand1.length > hand2.length) {
        const randomNum = Math.floor(Math.random() * hand1.length)
        const element = hand1.splice(randomNum, 1);
        hand2.push(element[0])
    }

    const hand1Exp = hand1.reduce((acc,n) => {
        return acc + n.base_experience;
    },0)
    const hand2Exp = hand2.reduce((acc,n) => {
        return acc + n.base_experience;
    },0)

    return (
        <div className='Pokegame'>
            <h1 className='Pokegame-header'>Pokedex</h1>
            <Pokedex player={1} cards={hand1} isWinner={hand1Exp > hand2Exp} exp={hand1Exp}/>
            <Pokedex player={2} cards={hand2} isWinner={hand1Exp < hand2Exp} exp={hand2Exp}/>
        </div>
    )
}

Pokegame.defaultProps = {
    pokemon: [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]}


export default Pokegame;