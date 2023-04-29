import React, { useState, useEffect } from "react";

function Planets() {
    const [starWarsData, setStarWarsData] = useState("");
    const [planetsPage, setPlanetsPage] = useState(1);
    const [count, setCount] = useState(0);
    const [next, setNext] = useState(0);
  
    useEffect(()=>{
      async function fetchPlanets() { 

        try {
          const results = await fetch(`https://swapi.dev/api/planets/?page=${planetsPage}`);
          const data = await results.json();
    
          setStarWarsData(data);

          // let count = starWarsData.count;
          setCount(starWarsData.count);
            // console.log(`count: ${count}`);
          // let next = starWarsData.next;
          setNext(starWarsData.next);
            // console.log(`next: ${next}`);

          let previous = starWarsData.previous;
          let planets = starWarsData.results;
  
         } catch (error) {
        console.error(error);
      }
    }
      fetchPlanets();
    }, [planetsPage]);
  
    function handelClick() {
      console.log(`planetsPage: ${planetsPage}`);
      console.log(`next: ${next}`)
      // if(next || !undefined || !null || planetsPage < 1) {
      if(next && planetsPage < 7) {
        setPlanetsPage(prev => prev + 1);
        // console.log(`next: ${next}`);
      } else {
        console.log(`All hand's on deck!`);
        console.log(`next: ${next}`)
        setPlanetsPage(prev => prev = 1);
      }
        
    }
  
    return (
      <>
        <div className='ctn'>
          <h1>SW API</h1>
              <button onClick={handelClick}>Next Page</button>
              {starWarsData && <p>starWarsData: {starWarsData.results[0].name}</p>}
        </div>
      </>
    )
}

export default Planets;