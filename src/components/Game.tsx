import { useEffect, useState } from 'react';
import pangrams from './dummy-sentence.json';
import Timer from './Timer';
import './Game.scss';

/** TODO
 * [/] - timer function AS ITS OWN COMPONENET
 * [-] - stat counter
 * [-] - save stats to db
 *    [x] - make db
 *    [-] - make login stuff
 *
 */

interface Pangrams {
  pangrams: string[];
}

const SECOND = 1000;
const MINUTE = SECOND * 60;

export default function Game() {
  const [input, setInput] = useState(''); // input field value
  const [wordSpace, setWordSpace] = useState(['']); // words with spaces
  const [words, setWords] = useState(['']); // words without spaces
  const [wordNr, setWordNr] = useState(0); // var to iterate over words
  const [gameOver, setGameOver] = useState(false); // GameState variable.
  const [isRunning, setIsRunning] = useState(false); // State for timer.
  const [wordTotal, setWordTotal] = useState(0); // state to store word total
  const [errors, setErrors] = useState(0); // state to store # of wrong words typed.
  const [right, setRight] = useState(0); // state to store # of right words typed.
  const max = 30; // timer maximum duration.

  const time = Timer(isRunning, max);

  const minutes = Math.floor((time / MINUTE) % 60);
  const seconds = Math.floor((time / SECOND) % 60);
  const milliseconds = time % SECOND;
  useEffect(() => {
    const _str = getRandomPangram(pangrams);
    const _wordsWithSpaces = _str.match(/\S+\s*/g);
    const _words = _wordsWithSpaces!.map((_word: string) => _word.split(' '));
    setWordNr(0);
    setWords(_words); // these throw Arg errors but work nonetheless.
    setWordSpace(_wordsWithSpaces); // See line above.
    setWordTotal(_words.length);
    return () => {};
  }, []);
    useEffect(() => {
    // gameover checks.
    if (words.length == 0 || time * SECOND == max) {
      // if words.length hits 0 or time hits maximum duration, set gameOver to true
      setIsRunning(false);
      setGameOver(true);
    }
  }, [time, words])
  function getRandomPangram(pangrams: Pangrams) {
    return pangrams.pangrams[Math.floor(Math.random() * pangrams.pangrams.length)];
  }

  const handleEnter = (key: string) => {
    // key == key pressed.
    /*     if (gameOver) { return; }
     */ if (!gameOver) {
      switch (key) {
        case ' ':
        case 'Enter':
          switch (nextWordCheck(input)) {
            case true: {
              handleDestroyWord();
              handlePaintWord(true);
              const _wordNr = wordNr + 1;
              setWordNr(_wordNr);
              setRight(right + 1);
              return setInput('');
            }
            case false:
              handlePaintWord(false);
              setErrors(errors + 1);
              return setInput('');
          }
          return;
      }
    }
  };

  // check what the next word is
  const nextWordCheck = (a?: string, debug?: boolean) => {
    const next = words[0][0];
    if (debug == true) {
      console.log(next);
      return;
    }
    return a === next ? true : false;
  };
  // destroy meaning remove
  const handleDestroyWord = () => {
    words.shift();
    return;
  };
  // colour word acc. to outcome
  const handlePaintWord = (bool: boolean) => {
    const el = document.getElementById(`word-${wordNr}`);
    switch (bool) {
      case true:
        el!.className = 'wordSpan correct';
        return;
      case false:
        el!.className = 'wordSpan wrong';
        return;
    }
  };
;
  const onGameOver = (): boolean => {
    // concat stats into one object[]
    // check if user is logged in.
    // if user logged in, send stats to database
    // if user not logged in, return.
    return false;
  };
  return (
    <>
      <div>
        <div className="game">
          {wordSpace.map((word, wordIndex) => (
            <span id={`word-${wordIndex}`} key={wordIndex} className="wordSpan">
              {word}
            </span>
          ))}
        </div>
        <input
          className="input"
          type="text"
          value={input.trim()}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            /**
             * Something in this onKeyDown() is causing a re-render issue when all words have been successfully typed.
             * */
            setIsRunning(!gameOver ? true : false);
            handleEnter(e.key);
          }}
        />
        <h4 className="Timer">
          {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`}
        </h4>
        <h4 className="Stats">
          {right}/{wordTotal} | wrong: {errors}
        </h4>
      </div>
      <h4 className="debug">Debug buttons</h4>
      <div className="debug">
        <button onClick={() => nextWordCheck(words[0][0], true)}>log next word</button>
        <button
          onClick={() => {
            console.log('destroying: ' + words[0][0]);
            handleDestroyWord();
          }}
        >
          destroy word
        </button>
        <button
          onClick={() => {
            console.log(words);
          }}
        >
          log words{' '}
        </button>
        <button
          onClick={() => {
            setIsRunning(!isRunning);
          }}
        >
          Toggle Timer
        </button>
        <button
          onClick={() => {
            setGameOver(!gameOver);
          }}
        >
          GameOver
        </button>
      </div>
    </>
  );
}
