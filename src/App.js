import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { themeChange } from "theme-change";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Home from "./pages/Home";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
	useEffect(() => {
		themeChange(false);
		// find the light button and toggle it.
		// const light_button = document.getElementById("light_button");
		// light_button.click();
	}, []);

	return (
		<ThemeContextProvider>
			<div className="">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</ThemeContextProvider>
	);
}

export default App;
