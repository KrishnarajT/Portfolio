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
	ordered_projects_app,
	ordered_projects_web,
	ordered_projects_game,
} from "../components/ProjectCardsData";
import ProjectSection from "../components/ProjectSection";

const Projects = () => {
	const { theme, setTheme } = React.useContext(ThemeContext);
	return (
		<div className="App Fade -z-40 p-4">
			<div
				className="min-h-[70vh] p-6 pb-0 pt-0 flex flex-col justify-start items-center
            sm:justify-evenly"
				id="mainbgdark_projects"
			>
				<div className="flex justify-center min-h-fit">
					<div
						className="flex flex-col items-center
                lg:justify-between lg:flex-row-reverse min-h-fit"
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
						<div className="max-h-fit">
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
					className="tabs tabs-boxed tabs-lg m-4 p-2 transform-gpu duration-200 text-center snap-center flex justify-center flex-wrap"
					id="thetabs"
				>
					<div
						className="text-xl tab tab-active"
						onClick={(e) => {
							// scroll to the element
							const current_tab_section =
								document.getElementById("major_projects");
							current_tab_section.scrollIntoView({
								behavior: "smooth",
							});

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
							document
								.getElementById("thetabs")
								.children[3].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[4].classList.remove("tab-active");

							// hide the others
							document
								.getElementById("mlds_projects")
								.classList.add("hidden");
							document
								.getElementById("app_dev_projects")
								.classList.add("hidden");
							document
								.getElementById("web_dev_projects")
								.classList.add("hidden");
							document
								.getElementById("game_dev_projects")
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
							document
								.getElementById("thetabs")
								.children[3].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[4].classList.remove("tab-active");

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
								.getElementById("app_dev_projects")
								.classList.add("hidden");
							document
								.getElementById("web_dev_projects")
								.classList.add("hidden");
							document
								.getElementById("game_dev_projects")
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
							document
								.getElementById("thetabs")
								.children[3].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[4].classList.remove("tab-active");

							// scroll to the element
							const current_tab_section =
								document.getElementById("app_dev_projects");
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
							document
								.getElementById("web_dev_projects")
								.classList.add("hidden");
							document
								.getElementById("game_dev_projects")
								.classList.add("hidden");

							// show the current one
							document
								.getElementById("app_dev_projects")
								.classList.remove("hidden");
						}}
					>
						App Dev
					</div>
					<div
						className="text-xl tab"
						onClick={(e) => {
							// make this tab active
							document
								.getElementById("thetabs")
								.children[3].classList.add("tab-active");
							document
								.getElementById("thetabs")
								.children[1].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[0].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[2].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[4].classList.remove("tab-active");

							// scroll to the element
							const current_tab_section =
								document.getElementById("web_dev_projects");
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
							document
								.getElementById("app_dev_projects")
								.classList.add("hidden");
							document
								.getElementById("game_dev_projects")
								.classList.add("hidden");

							// show the current one
							document
								.getElementById("web_dev_projects")
								.classList.remove("hidden");
						}}
					>
						Web Dev
					</div>
					<div
						className="text-xl tab"
						onClick={(e) => {
							// make this tab active
							document
								.getElementById("thetabs")
								.children[4].classList.add("tab-active");
							document
								.getElementById("thetabs")
								.children[3].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[1].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[0].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[2].classList.remove("tab-active");

							// scroll to the element
							const current_tab_section =
								document.getElementById("game_dev_projects");
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
							document
								.getElementById("app_dev_projects")
								.classList.add("hidden");
							document
								.getElementById("web_dev_projects")
								.classList.add("hidden");

							// show the current one
							document
								.getElementById("game_dev_projects")
								.classList.remove("hidden");
						}}
					>
						Game Dev
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
			<div id="major_projects" className="">
				<ProjectSection
					ordered_projects={ordered_projects_major}
					svg_name={"majorssvg"}
				/>
			</div>
			<div id="mlds_projects" className="hidden">
				<ProjectSection
					ordered_projects={ordered_projects_mlds}
					svg_name={"mldssvg"}
				/>
			</div>
			<div id="app_dev_projects" className="hidden">
				<ProjectSection
					ordered_projects={ordered_projects_app}
					svg_name={"devsvg"}
				/>
			</div>
			<div id="web_dev_projects" className="hidden">
				<ProjectSection
					ordered_projects={ordered_projects_web}
					svg_name={"devsvg"}
				/>
			</div>
			<div id="game_dev_projects" className="hidden">
				<ProjectSection
					ordered_projects={ordered_projects_game}
					svg_name={"devsvg"}
				/>
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
