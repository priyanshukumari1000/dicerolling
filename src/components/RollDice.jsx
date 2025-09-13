// import React from "react";
// import React, { useState } from "react";
import styled from "styled-components";
const RollDice=({
    rollDice,currentDice
})=>{

    // const [currentDice, setCurrentDice]=useState(1);
    // const generateRandomNumebr=  (min,max) => {
    //     console.log(Math.floor(Math.random()*(max-min)+min));
    //     return Math.floor(Math.random()*(max-min)+min);
    // };
    // const rollDice=()=>{
    //     const randomNumber= generateRandomNumebr(1,7);
    //     // setCurrentDice((prev)=>randomNumber);
    //     setCurrentDice(randomNumber);
    // }

    return (
        < DiceContainer>
        <div className="dice"
        onClick={rollDice}>
            <img src={`${currentDice}.jpeg`} alt={`dice ${currentDice}`} />
        </div>
        <p>
            Click on dice to roll
        </p>
        
        </ DiceContainer>
    )
}
export default RollDice;

const DiceContainer =styled.div`
margin-top:48px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

.dice{
    cursor:pointer;

}
    
`;