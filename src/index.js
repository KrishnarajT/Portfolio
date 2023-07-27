import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "./input.css";
import 'pace-js'
import 'pace-js/themes/yellow/pace-theme-minimal.css'
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
