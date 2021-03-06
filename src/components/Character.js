// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const StyledSection = styled.section`
    background-color: green;
    color: orange;
    padding: 1px;
    width: 30%;
    border-radius: 1rem;
    margin: 2rem;
    font-family: Arial, Helvetica, sans-serif;

    h3{
        color: blue;
        text-transform: uppercase;
        text-shadow: 2px 2px #ff0000;
        &:hover {
            color: yellow;
            text-shadow: 4px 4px 3px green;
        }
        
    }
    
`


const Character = (props) => {
    
    return (
        
            <StyledDiv>
                <StyledSection className = 'card'>
                    <article>
                    <h3>{props.character.name}</h3>
                    <p>{props.character.height}cm</p>
                    <p>{props.character.skin_color}</p> 
                    </article>
                </StyledSection>
            </StyledDiv>
        

    )
}

export default Character