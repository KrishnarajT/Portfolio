import React from "react";
import {
	IconAlphabetCyrillic,
	IconAlphabetLatin,
	IconAxe,
	IconBooks,
	IconChartDots,
	IconChartHistogram,
	IconChessKnight,
	IconChisel,
	IconClearAll,
	IconCode,
	IconEmpathize,
	IconPresentation,
	IconUserQuestion,
	IconUsers,
	IconUsersGroup,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import {
	AcademicCapIcon,
	ArrowUpRightIcon,
	CubeIcon,
	GlobeAsiaAustraliaIcon,
	LanguageIcon,
} from "@heroicons/react/24/solid";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { ThemeContext } from "../context/ThemeContext";
import ScrollButton from "../components/Scrollbutton";
import "../css/About.css";
import UilLetterHindiA from "../components/UilLetterHindiA";
import { EmojioneFlagForFrance } from "../components/EmojioneFlagForFrance";

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
                        md:w-full md:h-full md:min-w-[50vw] md:min-h-[50vh]"
						></div>
						<div>
							<div
								className="text-5xl text-center p-4
								md:text-7xl
                        "
							>
								Greetings!
							</div>
							<div className="text-3xl break-words p-4 text-center md:text-4xl">
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

			<div class="wrapper pb-9 m.t-16">
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
				<div className="text-5xl p-4 m-4 mb-0">Who I am</div>
				<IconUserQuestion className="w-16 h-16" />
				<div className="text-center text-2xl md:text-4xl p-4 m-4 break-words">
					basic info and swot analysis in an accordian thats
					collapsible. So that would be things im good at, things im
					bad at, things im learning, and things im interested in.
					qualities, hobbies, etc. Also write characteristics and
					qualities and soft skills and stuff. dont just list things
					use buttons or some fancy thing with icons if its something
					listable.
					<div className="join join-vertical w-full mt-5">
						<div className="collapse bg-base-200 collapse-arrow text-left my-3 join-item">
							<input type="checkbox" />
							<div className="collapse-title text-xl font-medium flex gap-3 items-center">
								<GlobeAsiaAustraliaIcon className="w-5 h-5" />
								Where Am I from?{" "}
							</div>
							<div className="collapse-content">
								<p className="text-lg">
									<ul className="list-inside list-disc">
										<li className="text-xl">
											Born in Jalna, Maharashtra, India
										</li>
										<li className="text-xl">
											Spent Childhood in Mumbai, India
										</li>
										<li className="text-xl">
											PreSchool in Dar Es Salaam, Tanzania
										</li>
										<li className="text-xl">
											Middle and High School in Doha,
											Qatar
										</li>
										<li className="text-xl">
											In Pune, India Since College, 2020
										</li>
									</ul>
								</p>
							</div>
						</div>
						<div className="collapse bg-base-200 collapse-arrow text-left my-3 join-item">
							<input type="checkbox" />
							<div className="collapse-title text-xl font-medium flex gap-3 items-center">
								<IconAxe className="w-5 h-5" />
								My Hobbies{" "}
							</div>
							<div className="collapse-content">
								<div className="text-lg flex flex-wrap gap-2">
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconAxe className="w-5 h-5" />
										Wood Working
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<CubeIcon className="w-5 h-5" />
										Cubing
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconChisel className="w-5 h-5" />
										Carving
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconChessKnight className="w-5 h-5" />
										Chess
									</div>
								</div>
							</div>
						</div>
						<div className="collapse bg-base-200 collapse-arrow text-left my-3 join-item">
							<input type="checkbox" />
							<div className="collapse-title text-xl font-medium flex gap-3 items-center">
								<IconPresentation
									className="w-5 h-5"
									stroke={1.5}
								/>
								Soft Skills{" "}
							</div>
							<div className="collapse-content">
								<div className="text-lg flex flex-wrap gap-2">
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconEmpathize className="w-5 h-5" />
										Pursuation
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconUsersGroup className="w-5 h-5" />
										Public Speaking
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconChessKnight className="w-5 h-5" />
										Critical Thinking & Problem Solving
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconPresentation className="w-5 h-5" />
										Presentations
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconUsers className="w-5 h-5" />
										Leadership
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconClearAll className="w-5 h-5" />
										Organizational
									</div>
								</div>
							</div>
						</div>
						<div className="collapse bg-base-200 collapse-arrow text-left my-3 join-item">
							<input type="checkbox" />
							<div className="collapse-title text-xl font-medium flex gap-3 items-center">
								<LanguageIcon className="w-5 h-5" />
								Languages{" "}
							</div>
							<div className="collapse-content">
								<div className="text-lg flex flex-wrap gap-2">
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<UilLetterHindiA className="w-5 h-5" />
										Gujarati
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<UilLetterHindiA className="w-5 h-5" />
										Hindi
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<UilLetterHindiA className="w-5 h-5" />
										Marathi
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconAlphabetLatin className="w-5 h-5" />
										English
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<EmojioneFlagForFrance className="w-5 h-5" />
										Basic Turkish and French
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div class="wrapper pb-9">
				.
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
				<div className="text-5xl p-4 m-4 mb-0">What I do</div>
				<IconChartDots stroke={1.5} className="w-16 h-16" />
				<div className="text-center text-2xl md:text-4xl p-4 m-4 break-words">
					this will have all the techincal things. a list of things
					that i do, then a graph of languages i know, then the things
					i am best at, what im learning and stuff in an accordian
					again collapsible.{" "}
					<div className="join join-vertical w-full mt-5">
						<div className="collapse bg-base-200 collapse-arrow text-left my-3 join-item">
							<input type="checkbox" />
							<div className="collapse-title text-xl font-medium flex gap-3 items-center">
								<GlobeAsiaAustraliaIcon className="w-5 h-5" />
								Primary Focus{" "}
							</div>
							<div className="collapse-content">
								<p className="text-lg">
									<ul className="list-inside list-disc">
										<li className="text-xl">
											Born in Jalna, Maharashtra, India
										</li>
										<li className="text-xl">
											Spent Childhood in Mumbai, India
										</li>
										<li className="text-xl">
											PreSchool in Dar Es Salaam, Tanzania
										</li>
										<li className="text-xl">
											Middle and High School in Doha,
											Qatar
										</li>
										<li className="text-xl">
											In Pune, India Since College, 2020
										</li>
									</ul>
								</p>
							</div>
						</div>
						<div className="collapse bg-base-200 collapse-arrow text-left my-3 join-item">
							<input type="checkbox" />
							<div className="collapse-title text-xl font-medium flex gap-3 items-center">
								<IconAxe className="w-5 h-5" />
								Expertise{" "}
							</div>
							<div className="collapse-content">
								<div className="text-lg flex flex-wrap gap-2">
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconAxe className="w-5 h-5" />
										Wood Working
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<CubeIcon className="w-5 h-5" />
										Cubing
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconChisel className="w-5 h-5" />
										Carving
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconChessKnight className="w-5 h-5" />
										Chess
									</div>
								</div>
							</div>
						</div>
						<div className="collapse bg-base-200 collapse-arrow text-left my-3 join-item">
							<input type="checkbox" />
							<div className="collapse-title text-xl font-medium flex gap-3 items-center">
								<IconPresentation
									className="w-5 h-5"
									stroke={1.5}
								/>
								Programming Languages{" "}
							</div>
							<div className="collapse-content">
								<div className="text-lg flex flex-wrap gap-2">
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconEmpathize className="w-5 h-5" />
										Pursuation
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconUsersGroup className="w-5 h-5" />
										Public Speaking
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconChessKnight className="w-5 h-5" />
										Critical Thinking & Problem Solving
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconPresentation className="w-5 h-5" />
										Presentations
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconUsers className="w-5 h-5" />
										Leadership
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconClearAll className="w-5 h-5" />
										Organizational
									</div>
									<div>
										<progress
											className="progress progress-primary w-56"
											value={0}
											max="100"
										></progress>
										<progress
											className="progress progress-primary w-56"
											value="10"
											max="100"
										></progress>
										<progress
											className="progress progress-primary w-56"
											value="40"
											max="100"
										></progress>
										<progress
											className="progress progress-primary w-56"
											value="70"
											max="100"
										></progress>
										<progress
											className="progress progress-primary w-56"
											value="100"
											max="100"
										></progress>
									</div>
								</div>
							</div>
						</div>
						<div className="collapse bg-base-200 collapse-arrow text-left my-3 join-item">
							<input type="checkbox" />
							<div className="collapse-title text-xl font-medium flex gap-3 items-center">
								<LanguageIcon className="w-5 h-5" />
								Tools and Frameworks{" "}
							</div>
							<div className="collapse-content">
								<div className="text-lg flex flex-wrap gap-2">
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<UilLetterHindiA className="w-5 h-5" />
										Gujarati
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<UilLetterHindiA className="w-5 h-5" />
										Hindi
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<UilLetterHindiA className="w-5 h-5" />
										Marathi
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<IconAlphabetLatin className="w-5 h-5" />
										English
									</div>
									<div className="badge badge-neutral badge-lg flex gap-2 justify-center py-4">
										<EmojioneFlagForFrance className="w-5 h-5" />
										Basic Turkish and French
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div class="wrapper pb-9">
				.
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
				<div className="text-5xl p-4 m-4 mb-0">Education</div>
				<IconBooks stroke={1} className="w-16 h-16" />

				<div className="text-center text-2xl md:text-4xl p-4 m-4 break-words">
					<ul className="steps steps-vertical">
						<li className="step step-primary">
							<div className="flex flex-col text-left">
								<span
									className={`text-2xl ${
										theme === "light"
											? "text-neutral"
											: "text-primary"
									} hover:text-accent cursor-pointe`}
									onClick={() => {
										window.open(
											"http://arunodayaschool.com/"
										);
									}}
								>
									Arunodaya Public School
								</span>
								<span className="text-xl">Mumbai, India</span>
								<span className="text-xl">2005 - 2006</span>
							</div>
						</li>
						<li className="step step-primary">
							<div className="flex flex-col text-left">
								<span
									className={`text-2xl ${
										theme === "light"
											? "text-neutral"
											: "text-primary"
									} hover:text-accent cursor-pointer`}
									onClick={() => {
										window.open(
											"https://indianschooldsm.ac.tz/"
										);
									}}
								>
									Indian Public School
								</span>
								<span className="text-xl">
									Dar Es Salaam, Tanzania
								</span>
								<span className="text-xl">2006 - 2008</span>
							</div>
						</li>
						<li className="step step-primary">
							<div className="flex flex-col text-left">
								<span
									className={`text-2xl ${
										theme === "light"
											? "text-neutral"
											: "text-primary"
									} hover:text-accent cursor-pointer`}
									onClick={() => {
										window.open(
											"https://www.stxavierschoolthane.com/"
										);
									}}
								>
									St. Xavier's School
								</span>
								<span className="text-xl">Mumbai, India</span>
								<span className="text-xl">2008 - 2011</span>
							</div>
						</li>
						<li className="step step-primary">
							<div className="flex flex-col text-left">
								<span
									className={`text-2xl ${
										theme === "light"
											? "text-neutral"
											: "text-primary"
									} hover:text-accent cursor-pointer`}
									onClick={() => {
										window.open(
											"https://bhavansqatar.org/"
										);
									}}
								>
									Bhavan's Public School
								</span>
								<span className="text-xl">Doha, Qatar</span>
								<span className="text-xl">
									CBSE 10th - 91.8%
								</span>
								<span className="text-xl">2011 - 2019</span>
							</div>
						</li>
						<li className="step step-primary">
							<div className="flex flex-col text-left">
								<span
									className={`text-2xl ${
										theme === "light"
											? "text-neutral"
											: "text-primary"
									} hover:text-accent cursor-pointer`}
									onClick={() => {
										window.open(
											"https://www.mknspune.com/"
										);
									}}
								>
									Mansukhbhai Kothari Public School
								</span>
								<span className="text-xl">Pune, India</span>
								<span className="text-xl">
									CBSE 12th Science - 96.4%
								</span>
								<span className="text-xl">2011 - 2019</span>
							</div>
						</li>
						<li className="step step-primary mt-4">
							<div className="flex flex-col text-left">
								<span
									className={`text-2xl ${
										theme === "light"
											? "text-neutral"
											: "text-primary"
									} hover:text-accent cursor-pointer`}
									onClick={() => {
										window.open(
											"https://www.mitwpu.edu.in/"
										);
									}}
								>
									Dr. Vishwanath Karads MIT World Peace
									University
								</span>
								<span className="text-xl">
									B.Tech in CSE in Cyber Security & Forensics
								</span>
								<span className="text-xl">Pune, India</span>
								<span className="text-xl">2021 - 2025</span>
							</div>
						</li>
					</ul>
				</div>
			</section>

			<div class="wrapper pb-9">
				.
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
				<div className="text-5xl p-4 m-4 text-center">
					Work Experience
				</div>
				<IconCode className="w-16 h-16" />
				<div className="text-center text-2xl md:text-4xl p-4 m-4 break-words">
					<ul className="steps steps-vertical">
						<li className="step step-secondary">
							<div className="flex flex-col text-left">
								<span
									className="text-2xl text-secondary hover:text-accent cursor-pointer"
									onClick={() => {
										window.open(
											"https://www.mknspune.com/"
										);
									}}
								>
									Mansukhbhai Kothari Public School
								</span>
								<span className="text-xl">Pune, India</span>
								<span className="text-xl">
									CBSE 12th Science - 96.4%
								</span>
								<span className="text-xl">2011 - 2019</span>
							</div>
						</li>
						<li className="step step-secondary mt-4">
							<div className="flex flex-col text-left">
								<span
									className="text-2xl text-secondary hover:text-accent cursor-pointer"
									onClick={() => {
										window.open(
											"https://www.mitwpu.edu.in/"
										);
									}}
								>
									Dr. Vishwanath Karads MIT World Peace
									University
								</span>
								<span className="text-xl">
									B.Tech in CSE in Cyber Security & Forensics
								</span>
								<span className="text-xl">Pune, India</span>
								<span className="text-xl">2021 - 2025</span>
							</div>
						</li>
					</ul>
				</div>
			</section>
			<div class="wrapper pb-9">
				.
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
				<div className="text-3xl p-4 m-4 text-center">
					Certifications and Achievements
				</div>
				<AcademicCapIcon className="w-16 h-16 mt-0" />
				<div className="text-center text-2xl md:text-4xl p-4 m-4 break-words">
					<ul className="list-disc">
						<li className="text-xl bg-base-200 p-4 rounded-xl my-2">
							<div
								className={`text-2xl ${
									theme === "light"
										? "text-neutral"
										: "text-primary"
								} flex flex-col justify-center`}
							>
								<a
									href="https://www.coursera.org/account/accomplishments/certificate/7Q4ZQZQZQZQZ"
									target="_blank"
									rel="noreferrer"
									className="hover:text-accent"
								>
									Deep Learning Specialization
								</a>{" "}
								<div className="text-left p-3 text-base-content">
									By deeplearning.ai on Coursera
								</div>
							</div>
						</li>
						<li className="text-xl bg-base-200 p-4 rounded-xl my-2">
							<div
								className={`text-2xl ${
									theme === "light"
										? "text-neutral"
										: "text-primary"
								} flex flex-col justify-center`}
							>
								<a
									href="https://www.coursera.org/account/accomplishments/certificate/7Q4ZQZQZQZQZ"
									target="_blank"
									rel="noreferrer"
									className="hover:text-accent"
								>
									Deep Learning Specialization
								</a>{" "}
								<div className="text-left p-3 text-base-content">
									By deeplearning.ai on Coursera
								</div>
							</div>
						</li>
						<li className="text-xl bg-base-200 p-4 rounded-xl my-2">
							<div
								className={`text-2xl ${
									theme === "light"
										? "text-neutral"
										: "text-primary"
								} flex flex-col justify-center`}
							>
								<a
									href="https://www.coursera.org/account/accomplishments/certificate/7Q4ZQZQZQZQZ"
									target="_blank"
									rel="noreferrer"
									className="hover:text-accent"
								>
									Deep Learning Specialization
								</a>{" "}
								<div className="text-left p-3 text-base-content">
									By deeplearning.ai on Coursera
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>
			<div class="wrapper pb-9">
				.
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
				<div className="text-4xl text-center p-4">
					Interested in Hiring?{" "}
				</div>
				{/* <IconUserQuestion className="w-16 h-16" /> */}
				<div className="text-center text-2xl md:text-4xl break-words"></div>
				<NavLink to={"/projects"} className="m-4 mt-10">
					<button className="btn btn-secondary btn-lg ">
						Look at my projects{" "}
						<ArrowUpRightIcon className="w-5 h-5" />
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

export default About;
