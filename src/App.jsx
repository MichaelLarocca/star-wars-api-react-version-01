import React, { useState } from "react";
console.log(React);

import "./App.css";
import PlanetsNew from "./components/PlanetsNew";
import People from "./components/People";

function App() {
	const [selectedComponent, setSelectedComponent] = useState("Main");
	console.log(`selectedComponent: ${selectedComponent}`);
	// setSelectedComponent("test");
	return (
		<>
			<nav>
				<button onClick={() => setSelectedComponent("Main")}>Main Page</button>
				<button onClick={() => setSelectedComponent("PlanetsNew")}>
					Planets
				</button>

				<button onClick={() => setSelectedComponent("People")}>People</button>
			</nav>
			{selectedComponent === "Main" && <h1>Star Wars API</h1>}
			{selectedComponent === "PlanetsNew" && <PlanetsNew />}
			{selectedComponent === "People" && <People />}
		</>
	);
}

export default App;
