// Write your Character component here
import React from 'react'

const Character = (props) => {
    return (
        <section className = 'card'>
           <img src = {props.character.url} alt=''/>
            <h3>{props.character.name}</h3>
            <p>{props.character.height}cm</p>
            <p>Films: {props.character.films}</p>

        </section>

    )
}

export default Character