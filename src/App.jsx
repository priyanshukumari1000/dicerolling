import { useState } from 'react'
<<<<<<< HEAD
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
=======
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from "styled-components";
// import { useState } from "react";
import Gameplay from "./components/gameplay"; 
import Start from "./components/start";
function App() {

  const[isGameStarted,setIsGameStarted]=useState(false);
  const toggleGamePLay=()=>{
    setIsGameStarted((prev)=>!prev);
  };
  return (
    <>
    {isGameStarted? <Gameplay/> : <Start 
    toggle={toggleGamePLay}/>}
 
    </>
  );
}

export default App
>>>>>>> 7c2681c57b9ee9507d5272abe0cdb6ca9633c727
