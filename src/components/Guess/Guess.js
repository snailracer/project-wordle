import React from 'react';
import {checkGuess} from "../../game-helpers";

function Guess({word, answer}) {

  const guessResult = checkGuess(word, answer);

  return (
      <div>
        <p className="guess">
          <span className={`cell ${guessResult && Object(guessResult[0]).status}`}>{word && word[0]}</span>
          <span className={`cell ${guessResult && Object(guessResult[1]).status}`}>{word && word[1]}</span>
          <span className={`cell ${guessResult && Object(guessResult[2]).status}`}>{word && word[2]}</span>
          <span className={`cell ${guessResult && Object(guessResult[3]).status}`}>{word && word[3]}</span>
          <span className={`cell ${guessResult && Object(guessResult[4]).status}`}>{word && word[4]}</span>
        </p>
      </div>
  );
}

export default Guess;
