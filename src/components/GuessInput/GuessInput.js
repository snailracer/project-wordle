import React, {useState} from 'react';
import {gameStatus} from "../../constants";

function GuessInput({previousGuesses, gameSessionStatus}) {

  const [wordGuess, setWordGuess] = useState('');

  const onSubmitHandler = (event) => {

    event.preventDefault();

    if(wordGuess.length < 5) {
      return;
    }

    previousGuesses(wordGuess);
    setWordGuess('');
  }

  return <div>
    <form onSubmit={onSubmitHandler} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input"
             type="text"
             required
             minLength={5}
             maxLength={5}
             value={wordGuess}
             onChange={(event) => {
               setWordGuess(event.target.value.toUpperCase());
             }}
             disabled={gameSessionStatus === gameStatus.WON || gameSessionStatus === gameStatus.LOST}
      />
    </form>
  </div>;
}

export default GuessInput;
