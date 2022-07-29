import React from 'react';
import './App.css';
import {useState} from 'react';
import Search from './Search.js';
import Dictionary from './Dictionary';

export default function App() {

    const [dictionary, setDictionary] = useState([]);
    const [newWord, setNewWord] = useState("");
    const [word, setWord] = useState("");
    const [message, setMessage] = useState("");

    function handleDictionarySubmit(event)  {
      event.preventDefault();
      setDictionary([...dictionary, newWord]);
      setNewWord("");
      setMessage("");
    };

    function handleSearchSubmit(event) {
      event.preventDefault();
      if(dictionary.includes(word)) {
        setMessage(`IS in the dictionary`);
      } else {
        setMessage(`Is NOT in the dictionary`);
      }
      setWord("");
    }
  return (
  <>
    <div>
      <Dictionary dictionary={dictionary} onChange={e => setNewWord(e.target.value)} onDictionarySubmit={handleDictionarySubmit}/>
    </div>
    <div> 
      <Search word={word} onSearchSubmit={handleSearchSubmit} onChange={e=> setWord(e.target.value)} message={message} />
    </div>
    </>
  );
}