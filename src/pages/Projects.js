import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../css/Projects.css";
import ScrollButton from "../components/Scrollbutton";
import {
	ArrowRightIcon,
	ArrowUpRightIcon,
	CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import Card from "../components/Card";
import {
	ordered_projects_major,
	ordered_projects_mlds,
	ordered_projects_dev,
} from "../components/ProjectCardsData";
const Projects = () => {
	const { theme, setTheme } = React.useContext(ThemeContext);
	return (
		<div className="App Fade -z-40 p-4">
			<div
				className="h-[70vh] p-6 pb-0 pt-0 flex flex-col justify-start items-center
            sm:justify-evenly"
				id="mainbgdark_projects"
			>
				<div className="flex justify-center">
					<div
						className="flex flex-col items-center
                lg:justify-between lg:flex-row-reverse"
					>
						<div
							id={
								theme === "light"
									? "introsvg_light_projects"
									: "introsvg_dark_projects"
							}
							className="p-4 m-4 min-w-[80vw] min-h-[25vh]
                        lg:w-full lg:h-full lg:min-w-[50vw] lg:min-h-[50vh]"
						></div>
						<div>
							<div
								className="text-5xl text-center p-4
								md:text-7xl
                        "
							>
								Welcome to{" "}
								<span className="text-accent">Projects!</span>{" "}
							</div>
							<div className="text-3xl break-words p-4 text-center md:text-4xl">
								This page contains a simple list of projects
								I've done over the years. It can help you get an
								insight into my skills and interests.
								<br></br> <br></br> Some are based on{" "}
								<span className="text-accent">
									Data Science
								</span>
								, some are apps published on the{" "}
								<span className="text-accent">Play Store</span>,
								while some are{" "}
								<span className="text-accent">Websites</span>,
								and some are just projects I've done{" "}
								<span className="text-accent">for fun. </span>.
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="wrapper pb-9 m.t-16">
				<div
					className={
						theme === "light"
							? "divider-light div-transparent-light"
							: "divider-dark div-transparent-dark"
					}
				></div>
			</div>

			{/* Projects section */}
			<div>
				<div className="text-5xl text-center p-4">Projects</div>
				<div className="text-3xl break-words p-4 text-center">
					Here are some projects that I have worked on!
				</div>
			</div>
			<div className="flex flex-col items-center justify-center">
				<div
					className="tabs tabs-boxed tabs-lg m-4 p-2 transform-gpu duration-200"
					id="thetabs"
				>
					<div
						className="text-xl tab tab-active"
						onClick={(e) => {
							// make this tab active
							document
								.getElementById("thetabs")
								.children[0].classList.add("tab-active");
							document
								.getElementById("thetabs")
								.children[1].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[2].classList.remove("tab-active");

							// scroll to the element
							const current_tab_section =
								document.getElementById("major_projects");
							current_tab_section.scrollIntoView({
								behavior: "smooth",
							});

							// hide the others
							document
								.getElementById("mlds_projects")
								.classList.add("hidden");
							document
								.getElementById("app_web_dev_projects")
								.classList.add("hidden");

							// show the current one
							document
								.getElementById("major_projects")
								.classList.remove("hidden");
						}}
					>
						{" "}
						Major
					</div>
					<div
						className="text-xl tab"
						onClick={(e) => {
							// make this tab active
							document
								.getElementById("thetabs")
								.children[1].classList.add("tab-active");
							document
								.getElementById("thetabs")
								.children[0].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[2].classList.remove("tab-active");

							// scroll to the element
							const current_tab_section =
								document.getElementById("mlds_projects");
							current_tab_section.scrollIntoView({
								behavior: "smooth",
							});

							// hide the others
							document
								.getElementById("major_projects")
								.classList.add("hidden");
							document
								.getElementById("app_web_dev_projects")
								.classList.add("hidden");

							// show the current one
							document
								.getElementById("mlds_projects")
								.classList.remove("hidden");
						}}
					>
						ML & DS
					</div>
					<div
						className="text-xl tab"
						onClick={(e) => {
							// make this tab active
							document
								.getElementById("thetabs")
								.children[2].classList.add("tab-active");
							document
								.getElementById("thetabs")
								.children[1].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[0].classList.remove("tab-active");

							// scroll to the element
							const current_tab_section = document.getElementById(
								"app_web_dev_projects"
							);
							current_tab_section.scrollIntoView({
								behavior: "smooth",
							});

							// hide the others
							document
								.getElementById("mlds_projects")
								.classList.add("hidden");
							document
								.getElementById("major_projects")
								.classList.add("hidden");

							// show the current one
							document
								.getElementById("app_web_dev_projects")
								.classList.remove("hidden");
						}}
					>
						App & Web Dev
					</div>
				</div>
			</div>
			<div className="toast toast-bottom toast-center duration-300 transform-gpu ease-in-out hidden">
				<div className="alert alert-success">
					<span className="flex items-center gap-4 text-2xl">
						<CheckBadgeIcon className="w-10 h-10" />
						Copied to Clipboard!
					</span>
				</div>
			</div>

			{/* sections */}

			<section
				id="major_projects"
				className=" p-2 m-2 mb-20 text-xl text-base-content"
			>
				<div className="flex justify-center p-4">
					<div
						className="flex flex-wrap justify-center gap-x-4 gap-y-8 w-4/5
						2xl:w-full items-end 2xl:justify-center self-center justify-self-center"
					>
						<div
							id={
								theme === "light"
									? "majorssvg_light_projects"
									: "majorssvg_dark_projects"
							}
							className="p-4 m-4 hidden 2xl:flex
                        2xl:w-full 2xl:h-full 2xl:min-w-[50vw] 2xl:min-h-[50vh]"
						></div>
						{ordered_projects_major.map((project) => {
							return (
								<Card
									title={project.title}
									description={project.description}
									image={project.image}
									link={project.link}
									tags={project.tags}
									new={project.new}
								/>
							);
						})}
					</div>
				</div>
			</section>
			<section
				id="mlds_projects"
				className="hidden p-2 m-2 mb-20 text-xl text-base-content"
			>
				<div className="flex justify-center p-4">
					<div
						className="flex flex-wrap justify-center gap-x-4 gap-y-8 w-4/5
						2xl:w-full items-end 2xl:justify-center self-center justify-self-center"
					>
						<div
							id={
								theme === "light"
									? "mldssvg_light_projects"
									: "mldssvg_dark_projects"
							}
							className="p-4 m-4 hidden 2xl:flex
                        2xl:w-full 2xl:h-full 2xl:min-w-[50vw] 2xl:min-h-[50vh]"
						></div>
						{ordered_projects_mlds.map((project) => {
							return (
								<Card
									title={project.title}
									description={project.description}
									image={project.image}
									link={project.link}
									tags={project.tags}
									new={project.new}
								/>
							);
						})}
					</div>
				</div>
			</section>
			<section
				id="app_web_dev_projects"
				className="hidden p-2 m-2 mb-20 text-xl text-base-content"
			>
				<div className="flex justify-center p-4">
					<div
						className="flex flex-wrap justify-center gap-x-4 gap-y-8 w-4/5
						2xl:w-full items-end 2xl:justify-center self-center justify-self-center"
					>
						<div
							id={
								theme === "light"
									? "devsvg_light_projects"
									: "devsvg_dark_projects"
							}
							className="p-4 m-4 hidden 2xl:flex
                        2xl:w-full 2xl:h-full 2xl:min-w-[50vw] 2xl:min-h-[50vh]"
						></div>
						{ordered_projects_dev.map((project) => {
							return (
								<Card
									title={project.title}
									description={project.description}
									image={project.image}
									link={project.link}
									tags={project.tags}
									new={project.new}
								/>
							);
						})}
					</div>
				</div>
			</section>
			<div class="wrapper pb-9 m.t-16">
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
				<div className="text-4xl text-center p-4">
					Interested in Hiring?{" "}
				</div>
				{/* <IconUserQuestion className="w-16 h-16" /> */}
				<div className="text-center text-2xl md:text-4xl break-words"></div>
				<NavLink to={"/projects"} className="m-4 mt-10">
					<button className="btn btn-secondary btn-lg ">
						Learn about me! <ArrowUpRightIcon className="w-5 h-5" />
					</button>
				</NavLink>
				<NavLink to={"/contact"} className="m-4">
					<button className="btn btn-secondary btn-lg ">
						Get in touch! <ArrowUpRightIcon className="w-5 h-5" />
					</button>
				</NavLink>
			</section>
			<ScrollButton />
		</div>
	);
};

export default Projects;
