import React, { useState } from "react";
console.log(React);

import "./App.css";
import Planets from "./components/Planets";
import People from "./components/People";
import Starships from "./components/Starships";

function App() {
	const [selectedComponent, setSelectedComponent] = useState("Main");
	console.log(`selectedComponent: ${selectedComponent}`);
	// setSelectedComponent("test");
	return (
		<>
			<nav>
				<button onClick={() => setSelectedComponent("Main")}>Main Page</button>
				<button onClick={() => setSelectedComponent("Planets")}>Planets</button>

				<button onClick={() => setSelectedComponent("People")}>People</button>
				<button onClick={() => setSelectedComponent("Starships")}>
					Starships
				</button>
			</nav>
			{selectedComponent === "Main" && <h1>Star Wars API</h1>}
			{selectedComponent === "Planets" && <Planets />}
			{selectedComponent === "People" && <People />}
			{selectedComponent === "Starships" && <Starships />}
		</>
	);
}

export default App;
