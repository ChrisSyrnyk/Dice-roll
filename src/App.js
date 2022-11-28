import styles from './styles.css'
import React, {useState} from 'react';

function App() {

  const [leftDieResult, setLeftDieResult] = useState(2);
  const [rightDieResult, setRightDieResult] = useState(1);



  const leftDieImg = require('./assets/'+leftDieResult+'.png');
  const rightDieImg = require('./assets/'+rightDieResult+'.png');

   //produce random number between min and max
  function ranNum(min, max){
    let rNum = Math.random() * (max-min) + min;
    let rINum = parseInt(rNum);
    return rINum;
  };

  function rollDice(){
    setLeftDieResult(ranNum(1,7));
    setRightDieResult(ranNum(1,7));
  }

  return (
    <>
    <div className="gameContainer roundCorners">
      <div className="diceContainer roundCorners">
        <img src={leftDieImg} alt = "left die" className = 'die'/>
        
        <img src={rightDieImg} alt = "right die" className = 'die'/>
        
      </div>
      <div className = 'scoreContainer'>
        {leftDieResult + rightDieResult}
      </div>
      <div className = "buttonContainer">
        <button className='buttonStyle' onClick = {()=>rollDice()}>Roll Dice</button>
      </div>
    </div>
    </>
  );
}

export default App;
