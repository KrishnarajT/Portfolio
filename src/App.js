import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { themeChange } from "theme-change";

function App() {
	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<div>
			<Navbar />
		</div>
	);
}

export default App;
