import React from "react";
import { IconUserQuestion } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { ThemeContext } from "../context/ThemeContext";
import ScrollButton from "../components/Scrollbutton";
import "../css/About.css";

const About = () => {
	const { theme, setTheme } = React.useContext(ThemeContext);

	return (
		<div className="App Fade">
			<div
				className="h-[70vh] p-6 pb-0 pt-0 flex flex-col justify-start items-center
            sm:justify-evenly"
				id="mainbgdark_about"
			>
				<div className="flex justify-center">
					<div
						className="flex flex-col items-center
                md:justify-between md:flex-row-reverse"
					>
						<div
							id={
								theme === "light"
									? "introsvg_light_about"
									: "introsvg_dark_about"
							}
							className="p-4 m-4 min-w-[80vw] min-h-[25vh]
                        md:w-full md:h-full md:min-w-[40vw] md:min-h-[30vh]"
						></div>
						<div>
							<div
								className="text-5xl text-center p-4
                        "
							>
								Greetings!
							</div>
							<div className="text-3xl break-words p-4 text-center">
								I am Krishnaraj Thadesar! An Aspiring{" "}
								<span className="text-accent">
									Data Scientist
								</span>
								, a Full Stack Developer, and a 3rd year
								Undergrad at MITWPU in Pune.
								<br></br>
								This page will help you get to know me a little
								better!
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="wrapper pb-9 mt-16">
				<div
					className={
						theme === "light"
							? "divider-light div-transparent-light"
							: "divider-dark div-transparent-dark"
					}
				></div>
			</div>

			{/* section 1 */}

			<section
				id="about_section"
				className="flex flex-col items-center justify-center mb-4 p-4"
			>
				<div className="text-5xl p-4 m-4">Who I am</div>
				<IconUserQuestion className="w-16 h-16" />
				<div className="text-center text-2xl p-4 m-4 break-words">
					basic info and swot analysis in an accordian thats
					collapsible. So that would be things im good at, things im
					bad at, things im learning, and things im interested in.
					qualities, hobbies, etc. Also write characteristics and
					qualities and soft skills and stuff. dont just list things
					use buttons or some fancy thing with icons if its something
					listable.
				</div>
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

			{/* section 2 */}

			<section
				id="about_section"
				className="flex flex-col items-center justify-center mb-4 p-4"
			>
				<div className="text-5xl p-4 m-4">What I do</div>
				<IconUserQuestion className="w-16 h-16" />
				<div className="text-center text-2xl p-4 m-4 break-words">
					this will have all the techincal things. a list of things
					that i do, then a graph of languages i know, then the things
					i am best at, what im learning and stuff in an accordian
					again collapsible.{" "}
				</div>
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

			{/* section 3 */}

			<section
				id="about_section"
				className="flex flex-col items-center justify-center mb-4 p-4"
			>
				<div className="text-5xl p-4 m-4">Education</div>
				<IconUserQuestion className="w-16 h-16" />
				<div className="text-center text-2xl p-4 m-4 break-words">
					this will be a timeline and schools that iv been to.
				</div>
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

			{/* section 4 */}

			<section
				id="about_section"
				className="flex flex-col items-center justify-center mb-4 p-4"
			>
				<div className="text-5xl p-4 m-4 text-center">Work Experience</div>
				<IconUserQuestion className="w-16 h-16" />
				<div className="text-center text-2xl p-4 m-4 break-words">
					some random things iv done. link them. and also a timeline
					maybe.
				</div>
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

			{/* section 5 */}

			<section
				id="about_section"
				className="flex flex-col items-center justify-center mb-4 p-4"
			>
				<div className="text-3xl p-4 m-4 text-center">Certifications and Achievements</div>
				<IconUserQuestion className="w-16 h-16" />
				<div className="text-center text-2xl p-4 m-4 break-words">
					Maybe link them to some certificates or just write there are none. 
				</div>
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


			{/*  this is the last section */}

			<section
				id="about_section"
				className="flex flex-col items-center justify-center mb-4 p-4"
			>
				<div className="text-4xl text-center p-4">Interested in Hiring? </div>
				{/* <IconUserQuestion className="w-16 h-16" /> */}
				<div className="text-center text-2xl break-words"></div>
				<NavLink to={"/projects"} className="m-4 mt-10">
					<button className="btn btn-secondary btn-lg ">
						Look at my projects{" "}
						<ArrowUpRightIcon className="w-5 h-5" />
					</button>
				</NavLink>
				<NavLink to={"/contact"} className="m-4">
					<button className="btn btn-secondary btn-lg ">
						Get in touch!{" "}
						<ArrowUpRightIcon className="w-5 h-5" />
					</button>
				</NavLink>
			</section>

			<ScrollButton />
		</div>
	);
};

export default About;
