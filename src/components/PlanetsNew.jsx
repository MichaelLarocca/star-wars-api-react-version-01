import React, { useEffect, useState } from "react";
import axios from "axios";
  
function PlanetsNew() {
  const [isLoading, setLoading] = useState(true); // Loading state
  const [starWarsData, setStarWarsData] = useState();

  useEffect(() => { // useEffect hook

   axios.get(`https://swapi.dev/api/planets/?page=1`)
    .then((response) => {
        // Get data
        setStarWarsData(response.data); //set  state
        setLoading(false); //set loading state
      });

    }, []);

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
          <p>planetsPage: {starWarsData.count}</p>
          <p>planetsPage: {starWarsData.next}</p>
          <p>planetsPage: {starWarsData.previous}</p>
          <p>{starWarsData.results[0].name}</p>
        </div>
      );    
}  

export default PlanetsNew;