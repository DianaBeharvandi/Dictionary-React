import React from 'react';
import './App.css';
import {useState} from 'react';

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
    <div className="App">
      <header className="Dictionary"> 
        <h1>Dictionary</h1>
      </header>
      <h2>
        <form onSubmit={handleDictionarySubmit}>
        <label htmlFor='myInput'></label>
        <input type="text" placeholder="Write a word:" id="myInput" value={newWord} onChange={e=> setNewWord(e.target.value)} />
        <input type="submit" value="Add word" />
        </form>
      </h2>

      <h2>
        <form onSubmit={handleSearchSubmit}>
        <label htmlFor='myWordSearch'></label>
        <input type="text" placeholder="Write a word:" id="myWordSearch" value={word} onChange={e=> setWord(e.target.value)} />
        <input type="submit" value="Search" />
        </form>
      </h2>
    </div>
   <div>{message}</div>
    </>
  );
}

