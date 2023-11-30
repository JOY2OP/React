//1. How react renders browser page - Render & Commit < Adding Interactivity lesson
//2. treat any JavaScript object/variable that you put into state as read-only
//3. Update Objects in state < adding interactivity
setPerson({
  ...person, // Copy the old fields
  firstName: e.target.value // But override this one
});


//-------------------------------------------------------------
'use client'

import { useState } from 'react';
import { sculptureList } from './utils.js';
//-------------------------------------------------------------

function Gallery(){
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    let hasPrev = index > 0;
    let hasNext = index < sculptureList.length-1;

    export default function handleNextClick(){
        if (hasNext){
        setIndex(index+1);
    }
    }

    function handlePreviousClick(){
        if (hasPrev){
            setIndex(index-1)
        }
    }

    function handleMoreClick(){
        setShowMore(!showMore)
    }
    
    let sculpture = sculptureList[index]

    return(
      <>
        <button onClick={handleNextClick} disabled={!hasNext}>Next</button>
        <button onClick={handlePreviousClick} disabled={!hasPrev}>Previous</button>

        <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>
        <h3>{index+1} of {sculptureList.length}</h3>
        <img src={sculpture.url} /><br/>

        <button onClick={handleMoreClick}>Show {showMore ? 'Less' : 'More'}</button>
        {showMore && <p>{sculpture.description}</p>}
        <br />
      </>
    )
}
}

//Next--------------------------------------------------------------

function Profile({src, name, profession, awards, discovered}){
    return(
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(src)}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b> 
            ({awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>
    )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile name={"Maria Skłodowska-Curie"} src={"szV5sdG"} profession={"physicist and chemist"} 
      awards={["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"]} 
      discovered={"polonium (chemical element)"}  
      />
   </div>
  );
}

        //=====================================================


import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        setNumber(n => n + 1);   //Updater function, updates the previous setNumber 
      }}>Increase the number</button>
    </>
  )
}
//Output: 6 : 
