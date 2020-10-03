import React, { useEffect, useState } from 'react';
import './App.css';

import Title from './components/Title';

function App() {

  const [joke, setJoke] = useState("Loading...")

  const [fname, setFn] = useState("")

  const newJoke = (first, second) => {
    //console.log('Clickaste')
    fetch(`http://api.icndb.com/jokes/random?firstName=${ first }&lastName=`)
    .then(res => res.json())
    .then(res2 => {
      console.log(res2)
      setJoke(res2.value.joke)
    })
  }

  useEffect(() => {
    newJoke(fname)
  },[fname])

  return (
    <div className="App container text-center">
      <Title />
      <div className="container wrapper">
        <input 
          className="input-data" 
          type="text"
          placeholder="Search a Joke"
          value={ fname } 
          onChange={(e) => setFn (e.target.value)}
          />
      </div>
      <h6 
        className="text-center mt-3">
        { joke }
      </h6>
    </div>
  );
}

export default App;
