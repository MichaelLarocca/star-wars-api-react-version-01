import React, { useEffect, useState } from "react";
import axios from "axios";
// console.log(React);
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
			<>
				<div>
					<h1>Planets</h1>
					<button
					// onClick={previousPage}
					// disabled={starWarsDataPlanets.previous ? false : true}
					>
						⏪ Previous Page
					</button>
					<button
					// onClick={nextPlanetPage}
					// disabled={starWarsDataPlanets.next ? false : true}
					>
						Next Page⏩
					</button>
				</div>
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
			</>
		);
	}

	const allPlanetsOnPage = starWarsDataPlanets.results.map((planet) => {
		console.log(planet);

		return (
			<div>
				<p key={planet.name}>{planet.name}</p>
				<p>{planet.climate}</p>
				<p>{planet.population}</p>
				<br />
			</div>
		);
	});

	return (
		<div>
			<h1>Planets</h1>
			<button
				onClick={previousPage}
				disabled={starWarsDataPlanets.previous ? false : true}
			>
				⏪ Previous Page
			</button>
			<button
				onClick={nextPlanetPage}
				disabled={starWarsDataPlanets.next ? false : true}
			>
				Next Page⏩
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
