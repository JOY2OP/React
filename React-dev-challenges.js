'use client'

import { useState } from 'react';
import { sculptureList } from './utils.js';
//-------------------------------------------------------------

function Gallery(){
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    let hasPrev = index > 0;
    let hasNext = index < sculptureList.length-1;

    function handleNextClick(){
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

export default function BigGallery(){
    return(
        <div>
            <Gallery />
            {/* <Gallery /> */}
        </div>
    )
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

      {/* <Profile name={"Maria Skłodowska-Curie"} src={"YfeOqp2"} profession={"physicist and chemist"} 
      awards={"(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"} 
      discovered={"polonium (chemical element)"}  
      /> */}

      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>

      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}
