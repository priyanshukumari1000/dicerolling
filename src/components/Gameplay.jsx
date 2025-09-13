import React from 'react'
import {Button, OutlineButton} from "../styled/Button";
import TotalScore from './TotalScore';
import styled from 'styled-components'
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import { useState } from 'react';

import Rules from './Rules';
const Gameplay=()=> {
    const [showRules,setShowRules]=useState(false);
    const [score,setScore]=useState(0);

    const [selectedNumber,setSelectedNumber]=useState();

        const [currentDice, setCurrentDice]=useState(1);
        const[error,setError]=useState("");

    const generateRandomNumebr=  (min,max) => {
        console.log(Math.floor(Math.random()*(max-min)+min));
        return Math.floor(Math.random()*(max-min)+min);
    };
    const rollDice=()=>{
        if(!selectedNumber){
            setError("you have not selected any numebr")

            return;

        } 
        // setError("");
        const randomNumber= generateRandomNumebr(1,7);
        // setCurrentDice((prev)=>randomNumber);
        setCurrentDice(randomNumber);

        

        if(selectedNumber==randomNumber){
            setScore((prev)=>prev+randomNumber);
        }
        else{
            setScore((prev)=>prev-2);

        }
        setSelectedNumber(undefined);
    };
    const resetScore=()=>{
        setScore(0);
    }


    return(<MainContainer>
        <div className="top_section">
            <TotalScore score ={score}/>
            <NumberSelector
            error={error}
            setError={setError}
            selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber}
            />

        </div>
        <RollDice 
            currentDice={currentDice}
            rollDice={rollDice}

        />
        <div className="btns">
            <OutlineButton
            onClick={resetScore}>
            Reset Score</OutlineButton>
            <Button
            onClick={()=>setShowRules((prev)=>!prev)} >{
                showRules ? " Hide":"Show"
                } Rules</Button>


        </div>
        {showRules &&<Rules/>} 


    </MainContainer>
    );
    
        
};
export default Gameplay

const MainContainer = styled.main`
padding-top:70px;
.top_section{
    display:flex;
    justify-content:space-around;
    align-items:end;

}
.btns{
    gap:10px;
    margin-top:40px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    /* max-width:220px; */
    align-items:center;
    gap:10px;

}

`;