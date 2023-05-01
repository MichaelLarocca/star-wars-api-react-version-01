import React, { useState, useEffect } from "react";
import axios from "axios";

function People() {
	const [isLoading, setLoading] = useState(true);
	const [starWarsDataPeople, setStarWarsDataPeople] = useState();
	const [urlPeople, setUrlPeople] = useState(
		`https://swapi.dev/api/people/?page=1`
	);

	useEffect(() => {
		axios.get(urlPeople).then((response) => {
			setStarWarsDataPeople(response.data);
			setLoading(false);
		});
	}, [urlPeople]);

	if (isLoading) {
		return (
			<>
				<div>
					<h1>People</h1>
					<button
						// onClick={previousPage}
						disabled={true}
					>
						⏪ Previous Page
					</button>
					<button
						// onClick={nextPlanetPage}
						disabled={true}
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

	const allPeopleOnPage = starWarsDataPeople.results.map((people) => {
		console.log(people);

		return (
			<div>
				<p key={people.name}>{people.name}</p>
				<p>{people.birth_year}</p>
				<p>{people.height}</p>
				<p>{people.hair_color}</p>
				<p>{people.skin_color}</p>
				<p>{people.eye_color}</p>
				<br />
			</div>
		);
	});

	return (
		<div>
			<h1>People</h1>
			<button
				onClick={previousPage}
				disabled={starWarsDataPeople.previous ? false : true}
			>
				⏪ Previous Page
			</button>
			<button
				onClick={nextPeoplePage}
				disabled={starWarsDataPeople.next ? false : true}
			>
				Next Page⏩
			</button>

			<main>{allPeopleOnPage}</main>
		</div>
	);

	function nextPeoplePage() {
		setLoading(true);
		setUrlPeople(starWarsDataPeople.next);
	}

	function previousPage() {
		setLoading(true);
		setUrlPeople(starWarsDataPeople.previous);
	}
}

export default People;
