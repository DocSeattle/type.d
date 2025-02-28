import pangrams from './dummy-sentence.json';
import { useEffect, useState } from 'react';
import './Game.scss';

/** TODO
 * [] - timer function AS ITS OWN COMPONENET
 * [] - stat counter
 * [] - save stats to db
 *    [] - make db
 *    [] - make login stuff
 * 
 */

interface Pangrams {
  pangrams: string[];
}

export default function Game() {
  const [input, setInput] = useState(''); // input field value
  const [wordSpace, setWordSpace] = useState(['']); // words with spaces
  const [words, setWords] = useState(['']); // words without spaces
  const [wordNr, setWordNr] = useState(0); // var to iterate over words

  useEffect(() => {
    const _str = getRandomPangram(pangrams);
    const _wordsWithSpaces = _str.match(/\S+\s*/g);
    const _words = _wordsWithSpaces!.map((_word: string) => _word.split(' '));
    setWordNr(0);
    setWords(_words);
    setWordSpace(_wordsWithSpaces);
    return () => {};
  }, []);

  function getRandomPangram(pangrams: Pangrams) {
    return pangrams.pangrams[Math.floor(Math.random() * pangrams.pangrams.length)];
  }

  const handleEnter = (key: string) => {
    // key == key pressed.
    switch (key) {
      case " ":
      case "Enter":
        if (words.length == 0) {
          console.log('you win!');
          return;
        }
        switch (nextWordCheck(input)) {
          case true: {
            handleDestroyWord();
            handlePaintWord(true);
            const foo = wordNr + 1;
            setWordNr(foo);
            return setInput('');
          }
          case false:
            handlePaintWord(false);
            return setInput('');
        }
        return;
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
  return (
    <>
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
          handleEnter(e.key);
        }}
      />
      <h4 className="debug">Debug buttons</h4>
      <div className="debug">
        <button onClick={() => nextWordCheck(words[0][0], true)}>log next word</button>
        <button
          onClick={() => { console.log('destroying: ' + words[0][0]); handleDestroyWord();}}>destroy word</button>
        <button onClick={() => {console.log(words);}}>log words </button>
      </div>
    </>
  );
}
