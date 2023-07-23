import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { themeChange } from "theme-change";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";
function App() {
	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<div className="">
			<Navbar />
			<Routes>
				<Route path="/contact" element={<Contact />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
