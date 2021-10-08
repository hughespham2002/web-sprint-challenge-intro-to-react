import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Character from './components/Character.js'
import axios from 'axios';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
     .then(res => {
       setInfo(res.data);

     }).catch(err => {
       console.error(err);
     })
  }, [])
  console.log(info)
  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {
        info.map(character => {
          return (
          <Character info = {character} />
          )
        })
      }
      
    </div>
  );
}

export default App;
