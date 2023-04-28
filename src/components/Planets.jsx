import React, { useState, useEffect } from "react";

function Planets() {
    const [starWarsData, setStarWarsData] = useState({});
    const [planetsPage, setPlanetsPage] = useState(1);
  
    // useEffect(function() {
    //     fetch(`https://swapi.dev/api/planets/?page=${planetsPage}`)
    //         .then(res => res.json())
    //         .then(data => setStarWarsData(data));
    //             console.log(`starWarsData: ${starWarsData.next}`)
    //           let count = starWarsData.count;
    //             console.log(count);
    //           let next = starWarsData.next;
    //             console.log(`next page: ${next}`)   
    //           let previous = starWarsData.previous;  
    //             console.log(`previous ${previous}`)
  
    // }, [planetsPage]);
  
    useEffect(()=>{
      async function fetchPlanets() { 
        let results = await fetch(`https://swapi.dev/api/planets/?page=${planetsPage}`);
        const data = await results.json();
  
        setStarWarsData(data);
          console.log(`starWarsData: ${starWarsData}`)
  
        let count = starWarsData.count;
        let next = starWarsData.next;
        //   console.log(`next page: ${next}`)
        let previous = starWarsData.previous;
        //   console.log(`count ${count}`);
        //   console.log(`next ${next}`);
        //   console.log(`previous ${previous}`)
  
        //   console.log(`planetsPage: ${planetsPage}`);
  
        let planets = starWarsData.results;
        //   console.log(` starWarsData planets: ${planets}`);
      } 
      fetchPlanets();
    }, [planetsPage]);
  
    function handelClick() {
      // if(next){
        setPlanetsPage(prev => prev + 1);
      // } else {
        // setPlanetsPage(prev = 1);
      // }
      
    }
  
    return (
      <>
        <div className='ctn'>
          <h1>SW API</h1>
          <div>
          {/* <button onClick={() => setPlanetsPage(prevCount => prevCount + 1)}>Next Page</button> */}
              <button onClick={handelClick}>Next Page</button>
              {/* { <h2>The planetsPage is {planetsPage}</h2> */}
              {/* {starWarsData && 
                starWarsData.map((p) => {
                  const {count, next, previous} = starWarsData;
                  return (
                    <div key={next}>
                      <h5> {count} </h5>
                      <h6> {previous }</h6>
                    </div>
                  )
                })
              } } */}
              {/* { <p>starWarsData: {starWarsData.results[0].name}</p>  */}
              {/* <pre>{JSON.stringify(starWarsData, null, 2)}</pre> */}
              {starWarsData ? <pre>{JSON.stringify(starWarsData, null, 2)}</pre> : <p>No Data</p>}
              {/* {starWarsData ? <p>starWarsData: {starWarsData.results[0].name}</p> : <p>No Data</p>}  */}

          </div>
          <p></p>
        </div>
      </>
    )
}

export default Planets;