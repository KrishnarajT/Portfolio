import React from "react";
import "../css/Home.css";
import { ThemeContext } from "../context/ThemeContext";
import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { IconApiApp, IconPhonePlus, IconUserCode, IconUsersPlus } from "@tabler/icons-react";

const Home = () => {
	const { theme, setTheme } = React.useContext(ThemeContext);

	return (
		<div>
			<div
				className="h-[80vh] p-6 pb-0 pt-0 flex flex-col justify-start items-center
            sm:justify-evenly"
				id={theme === "light" ? "mainbglight" : "mainbgdark"}
			>
				<div className="flex justify-center">
					<div
						className="flex flex-col items-center
                md:justify-between md:flex-row-reverse"
					>
						<div
							id={
								theme === "light"
									? "introsvg_light"
									: "introsvg_dark"
							}
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
								An Aspiring Data Scientist, a Full Stack
								Developer, and a 3rd year Undergrad at MITWPU in
								Pune.
							</div>
						</div>
					</div>
				</div>
				<button className="btn btn-primary btn-lg m-4 mt-10">
					Learn More about Me <ArrowDownIcon className="w-5 h-5" />
				</button>
			</div>
			<section></section>
			<div class="wrapper pb-9">
				<div
					className={
						theme === "light"
							? "divider-light div-transparent-light"
							: "divider-dark div-transparent-dark"
					}
				></div>
			</div>
			<section
				id="projects_section"
				className="flex flex-col items-center justify-center mb-4 p-4"
			>
				<IconApiApp className="w-24 h-24" />
				<div className="text-center text-2xl p-4 m-4">
					I have worked on several Projects ever since I started
					coding. They span across fields like Software Development,
					Data Science, App Dev and Web Dev. My primary focus has been
					on Data Science and Web Dev.
				</div>
				<NavLink to={"/projects"} className="m-4 mt-10">
					<button className="btn btn-primary btn-lg ">
						Visit My Projects{" "}
						<ArrowUpRightIcon className="w-5 h-5" />
					</button>
				</NavLink>
			</section>
			<div class="wrapper pb-9">
				<div
					className={
						theme === "light"
							? "divider-light div-transparent-light"
							: "divider-dark div-transparent-dark"
					}
				></div>
			</div>
			<section
				id="about_section"
				className="flex flex-col items-center justify-center mb-4 p-4"
			>
				<IconUserCode className="w-24 h-24" />
				<div className="text-center text-2xl p-4 m-4">
					I have worked on several Projects ever since I started
					coding. They span across fields like Software Development,
					Data Science, App Dev and Web Dev. My primary focus has been
					on Data Science and Web Dev.
				</div>
				<NavLink to={"/projects"} className="m-4 mt-10">
					<button className="btn btn-primary btn-lg ">
						Learn More
						<ArrowUpRightIcon className="w-5 h-5" />
					</button>
				</NavLink>
			</section>
			<div class="wrapper pb-9">
				<div
					className={
						theme === "light"
							? "divider-light div-transparent-light"
							: "divider-dark div-transparent-dark"
					}
				></div>
			</div>
			<section
				id="contact_section"
				className="flex flex-col items-center justify-center mb-4 p-4"
			>
				<IconApiApp className="w-24 h-24" />
				<div className="text-center text-2xl p-4 m-4">
					I have worked on several Projects ever since I started
					coding. They span across fields like Software Development,
					Data Science, App Dev and Web Dev. My primary focus has been
					on Data Science and Web Dev.
				</div>
				<NavLink to={"/projects"} className="m-4 mt-10">
					<button className="btn btn-primary btn-lg ">
						Let's get in touch !
						<IconUsersPlus className="w-5 h-5" />
					</button>
				</NavLink>
			</section>
			<div class="wrapper pb-9">
				<div
					className={
						theme === "light"
							? "divider-light div-transparent-light"
							: "divider-dark div-transparent-dark"
					}
				></div>
			</div>
		</div>
	);
};

export default Home;
