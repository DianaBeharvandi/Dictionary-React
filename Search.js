import React from 'react';


export default function Search(props) {


  return (
    <>
    <div className="Search">
      
      <h2>
        <form onSubmit={props.onSearchSubmit}>
        <label htmlFor='myWordSearch'></label>
        <input type="text" placeholder="Write a word:" id="myWordSearch" value={props.word} onChange={props.onSearchChange} />
        <input type="submit" value="Search" />
        </form>
      </h2>
    </div>
   <div>{props.message}</div>
    </>
  );
}

