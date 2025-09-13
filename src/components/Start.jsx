import React from 'react'
import {Button} from "../styled/Button";

import styled from 'styled-components'
const Start=({toggle})=> {
    // return(
    //     // <div>start</div>
        
    // );
    return <Container>
        <div>
            <img src="dices.jpg"/>

        </div>
        
        <div className="content">
            <h1> Dice Game</h1>
            <Button
            onClick={toggle}>Play Now</Button>
        </div>
        
    </Container>;
};
export default Start
const Container=styled.div`
max-width:1180px;
display:flex;
margin:0 auto;
height:100vh;
align-items:center;
.content {
    h1{
        font-size:90px;
        white-space:nowrap;
    }

}



    
`;
// const Button =styled.button`
// /* display:flex;
// flex-direction:column;
// justify-content:center;
// align-items:center; */
// color:white;
// padding:10px 18px;
// min-width:220px;
// height:44px;
// background:#000000;
// border:none;
// border-radius:5px;
// font-size:16px;
// border:1px solid transparent;
// transition:0.3s background ease-in;
// cursor:pointer;

// &:hover{
//     background-color:#c0bbbb;
//     border:1px solid black;
//     color:black;
//     transition:0.3s background ease-in;

// }
// `;

