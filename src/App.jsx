import { useState } from 'react'
import styled from "styled-components";
import Gameplay from "./components/gameplay"; 
import Start from "./components/start";

function App() {
  const[isGameStarted,setIsGameStarted]=useState(false);
  const toggleGamePLay=()=>{
    setIsGameStarted((prev)=>!prev);
  };
  return (
    <>
      {isGameStarted ? <Gameplay/> : <Start 
        toggle={toggleGamePLay}/>}
    </>
  );
}

export default App