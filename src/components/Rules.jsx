import React from 'react'
import styled from "styled-components"
const Rules=()=>{
    return(
        <RulesContainer>
            <h2> How to play dice game</h2>
            <div className="text">
                <p> select any number</p>
                <p> click on dice</p>
                <p> after clicking on dice if you get number equal to dice number , you will get same point as on dice {" "}</p>
                <p> if you get wrong the  2 points will be deducted </p>
                <p> select any number</p>
            </div>
        
        </RulesContainer>

    )
}
export default Rules
const RulesContainer=styled.div`
max-width:800px;
margin:0 auto;
margin-top:40px ;
border-radius:10px;

background-color:#fbf1f1;
padding:20px;
h2{
    font-size:24px;
    
}
.text{
    margin-top:24px;

}

`;