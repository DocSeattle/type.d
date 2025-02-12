import "./dummy.json"
import React, { useEffect } from "react";
export default function Game(){ 
        useEffect(() => {
            Initialize(-10)
        }, []);

    return (
        <>
        { /** how access useEffect data */ }
        </>
    )
}

function Initialize(size: number) {
    const words: array = GetWords();
    let init = Randomize(words, size);
    return init;
}

function GetWords() : array {
const jsonString = `{
    "words": [
        "the", "be", "to", "of", "and", "a", "in", "that", "have", "I", "it",
        "for", "not", "on", "with", "he", "as", "you", "do", "at", "this", "but",
        "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will",
        "my", "one", "all", "would", "there", "their", "what", "so", "up", "out",
        "if", "about", "who", "get", "which", "go", "me"
    ]
}`;
    let words = JSON.parse(jsonString);
    return words.words;
}

function Randomize(arr: array, size: number) : array {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(size);
    
}

