import React, { useEffect, useState } from "react";
import axios from "axios";
  
function PlanetsNew() {
  const [isLoading, setLoading] = useState(true); // Loading state
  const [starWarsData, setStarWarsData] = useState();
  const [url, setUrl] = useState(`https://swapi.dev/api/planets/?page=1`)

  useEffect(() => { // useEffect hook

//    axios.get(`https://swapi.dev/api/planets/?page=1`)
   axios.get(url)
    .then((response) => {
        // Get data
        setStarWarsData(response.data); //set  state
        setLoading(false); //set loading state
      });

    }, [url]);

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
        <div>    
          <h1>SW Planets</h1>
          <p>planetsPage count: {starWarsData.count}</p>
          <p>planetsPage next: {starWarsData.next}</p>
          <p>planetsPage previous: {starWarsData.previous}</p>
          <p>{starWarsData.results[0].name}</p>
          <button onClick={nextPlanetPage} disabled={starWarsData.next ? false : true}>Planet Page Next</button>
          <button onClick={previousPage} disabled={starWarsData.previous ? false : true}>Planet Page Previous</button>
        </div>
      );    

      function nextPlanetPage() {
        setUrl(starWarsData.next);        
      }

      function previousPage() {
        setUrl(starWarsData.previous); 
      }
}  

export default PlanetsNew;