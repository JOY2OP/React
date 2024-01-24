import React from 'react';
import {useState, useCallback, useEffect, useRef} from 'react';
import './App.css';

export default function App() {
  const [password, setPassword]  = useState('');
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed ] = useState(false);

  const passRef = useRef(null)

  //GENERATES PASSWORD -------------------------------------------------
  const generatePassword = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGTHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' 

    if (numberAllowed) str += "0123456789" ;
    if (charAllowed) str+= "!@#$%^&*()_+-=" ;

    for (let i=0; i<length; i++){
      const random = Math.floor(Math.random()*str.length)
      pass += str.charAt(random);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed])

  useEffect(()=>{generatePassword()}, [length,numberAllowed,charAllowed] )
  //---------------------------------------------------------------------
  const copyToClipboard = () =>{
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
  }


  return (
   <div>
    <h3>Password Generator</h3>
      <div>
        <input ref={passRef} type="text" value={password} placeholder='password' readOnly/>
        <button onClick={copyToClipboard}>Copy</button>
      </div>
      <div>
        <div>

          <input type="range" name="" id="" min={6} max={35} value={length} onChange={(e) => setLength(e.target.value)}/>
          <label htmlFor="">Length:{length}</label>

          <input type="checkbox" name="" id="" 
          defaultChecked={numberAllowed} 
          onChange={() => setNumberAllowed((prev) => !prev)} />
          <label htmlFor="number">Number</label>

          <input type="checkbox" name="" id="" 
          defaultChecked={charAllowed} 
          onChange={() => setCharAllowed((prev) => !prev)} />
          <label htmlFor="CharInput">Character</label>

        </div>
      </div>
   </div>
  );
}
