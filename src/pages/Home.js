import React from "react";
import "../css/Home.css";

const Home = () => {
	return (
		<div className="h-fit p-6" id="mainbg">
			<div className="flex justify-center">
				<div className="flex flex-col">
					<div id="introsvg" className="h-36 p-4 m-4"></div>
					<div className="text-5xl text-center p-4">
						Hi! I am Krishnaraj
					</div>
					<div className="text-3xl break-words p-4 text-center">
						An Aspiring Data Scientist, a Full Stack Developer, and
						a 3rd year Undergrad at MITWPU in Pune.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
