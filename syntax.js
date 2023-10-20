// App.js

import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const Person = (props) =>{
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Sabka baap</h2>
    </>
  )
}

const App = () => {
const [count, setCount] = useState(0);
useEffect(()=>{
  setCount(6)
},[])                                           //[] is dependency array, The dependency array in useEffect is used to tell React which values need to be monitored for changes. When certain values change, useEffect will run again.

  return (
    <div className="App">
      <button onClick={() =>setCount((nextCount)=> nextCount+1 )}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount -1)}>-</button>
  
    </div>
  );
}

export default App;
