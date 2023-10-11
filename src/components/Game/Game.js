import React, {useState} from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import Guess from "../Guess";
import {gameStatus, NUM_OF_GUESSES_ALLOWED} from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = useState([]);
  const [status, setGameStatus] = useState('');

  const updatedPreviousGuesses = (latestGuess) => {
    let updatedGuesses = [...guesses];
    updatedGuesses.push(latestGuess)
    setGuesses(updatedGuesses);

    if(updatedGuesses.includes(answer)) {
      setGameStatus(gameStatus.WON);
    } else if (updatedGuesses.length === 6) {
      setGameStatus(gameStatus.LOST);
    }
  }

  const gridArray = range(0, NUM_OF_GUESSES_ALLOWED);

  const winMessage = status === gameStatus.WON &&  (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          {' '}
          <strong>3 guesses</strong>.
        </p>
      </div>
  );

  const looseMessage = status === gameStatus.LOST &&  (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
  );

  return <>
    {winMessage}
    {looseMessage}
    {
      gridArray.map((row,) => {
        return <Guess key={`word-guess-${row+1}`} word={guesses[row]} answer={answer}/>
      })
    }

    <GuessInput previousGuesses={updatedPreviousGuesses} gameSessionStatus={status}/>
  </>;
}

export default Game;
