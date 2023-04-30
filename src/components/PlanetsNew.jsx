import React, { useEffect, useState } from "react";
import axios from "axios";

function PlanetsNew() {
	const [isLoading, setLoading] = useState(true);
	const [starWarsDataPlanets, setStarWarsDataPlanets] = useState();
	const [urlPlanets, setUrlPlanets] = useState(
		`https://swapi.dev/api/planets/?page=1`
	);

	useEffect(() => {
		axios.get(urlPlanets).then((response) => {
			setStarWarsDataPlanets(response.data);
			setLoading(false);
		});
	}, [urlPlanets]);

	if (isLoading) {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					height: "100vh",
				}}
			>
				Loading... {console.log("loading state")}
			</div>
		);
	}

	const allPlanetsOnPage = starWarsDataPlanets.results.map((planet) => {
		console.log(planet);

		return (
			<div>
				<p>{planet.name}</p>
				<p>{planet.climate}</p>
				<p>{planet.population}</p>
			</div>
		);
	});

	return (
		<div>
			<h1>SW Planets</h1>
			<button
				onClick={previousPage}
				disabled={starWarsDataPlanets.previous ? false : true}
			>
				⏪ Planet Page Previous
			</button>
			<button
				onClick={nextPlanetPage}
				disabled={starWarsDataPlanets.next ? false : true}
			>
				Planet Page Next ⏩
			</button>

			<main>{allPlanetsOnPage}</main>
		</div>
	);

	function nextPlanetPage() {
		setLoading(true);
		setUrlPlanets(starWarsDataPlanets.next);
	}

	function previousPage() {
		setLoading(true);
		setUrlPlanets(starWarsDataPlanets.previous);
	}
}

export default PlanetsNew;
