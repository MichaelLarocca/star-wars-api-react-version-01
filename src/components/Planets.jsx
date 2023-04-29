import React, { useState, useEffect } from "react";
import axios from "axios";

function Planets() {
    const [starWarsData, setStarWarsData] = useState("");
    const [planetsPage, setPlanetsPage] = useState(1);
    const [count, setCount] = useState(0);
    const [next, setNext] = useState(0);
    const [isLoading, setLoading] = useState(true); // Loading state


    // useEffect(() => { // useEffect hook

    //   axios.get("https://swapi.dev/api/planets/?page=1")
    //   .then((response) => {
      
    //       // Get pokemon data
    //       planetsPage(response.data); //set pokemon state
    //       setLoading(false); //set loading state
    //     });

    //   }, []);
  
    useEffect(()=>{
      // async function fetchPlanets() { 

        axios.get(`https://swapi.dev/api/planets/?page=${planetsPage}`)
        .then((response) => {
        
            // Get pokemon data
            planetsPage(response.data); //set state
            setLoading(false); //set loading state
              console.log(`response: ${response}`)

          // const results = await fetch(`https://swapi.dev/api/planets/?page=${planetsPage}`);
          // const data = await results.json();
    
          setStarWarsData(response.data);
            

          // let count = starWarsData.count;
          setCount(starWarsData.count);
            console.log(`count: ${count}`);
          // let next = starWarsData.next;
          setNext(starWarsData.next);
            console.log(`next: ${next}`);

          let previous = starWarsData.previous;
          let planets = starWarsData.results;

      //   try {
      //     const results = await fetch(`https://swapi.dev/api/planets/?page=${planetsPage}`);
      //     const data = await results.json();
    
      //     setStarWarsData(data);

      //     // let count = starWarsData.count;
      //     setCount(starWarsData.count);
      //       // console.log(`count: ${count}`);
      //     // let next = starWarsData.next;
      //     setNext(starWarsData.next);
      //       // console.log(`next: ${next}`);

      //     let previous = starWarsData.previous;
      //     let planets = starWarsData.results;
  
      //    } catch (error) {
      //   console.error(error);
      // }
    // }

  });
      fetchPlanets();
    }, [planetsPage]);
    
    function handelClick() {

        if(!isLoading) {
          console.log(`starWarsData: ${starWarsData}`)
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
      }

    if (isLoading) {
      return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}>Loading the data {console.log("loading state")}</div>
    );
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