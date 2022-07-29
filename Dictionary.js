import React from 'react';

export default function Dictionary(props) {
  
  
  return (<>
    <div>
      <header className="Dictionary"> 
        <h1>Dictionary</h1>
      </header>
      <h2>
        <form onSubmit={props.onDictionarySubmit}>
        <label htmlFor='myInput'></label>
        <input type="text" placeholder="Write a word:" id="myInput" value={props.newWord} onChange={props.onChange} />
        <input type="submit" value="Add word" />
        </form>
      </h2>
    </div>
    </>
  );
}