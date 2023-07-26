import React from "react";
import "../css/Home.css";
import { ThemeContext } from "../context/ThemeContext";
import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";

const Home = () => {
	const { theme, setTheme } = React.useContext(ThemeContext);

	return (
		<div
			className="h-screen p-6 flex flex-col justify-start items-center
            sm:justify-evenly"
			id={theme === "light" ? "mainbglight" : "mainbgdark"}
		>
			<div className="flex justify-center">
				<div
					className="flex flex-col items-center
                md:justify-between md:flex-row-reverse"
				>
					<div
						id="introsvg"
						className="p-4 m-4 min-w-[50vw] min-h-[12vh]
                        md:w-full md:h-full md:min-w-[30vw] md:min-h-[30vh]"
					></div>
					<div>
						<div
							className="text-5xl text-center p-4
                        "
						>
							Hi! I am Krishnaraj
						</div>
						<div className="text-3xl break-words p-4 text-center">
							An Aspiring Data Scientist, a Full Stack Developer,
							and a 3rd year Undergrad at MITWPU in Pune.
						</div>
					</div>
				</div>
			</div>
			<button className="btn btn-primary btn-lg m-4 mt-10">
				Learn More about Me <ArrowDownIcon className="w-5 h-5" />
			</button>
		</div>
	);
};

export default Home;
