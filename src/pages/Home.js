import React, { useEffect } from "react";
import "../css/Home.css";
import { ThemeContext } from "../context/ThemeContext";
import {
	ArrowDownIcon,
	ArrowUpRightIcon,
	CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import {
	IconApiApp,
	IconBrandDiscord,
	IconBrandGithub,
	IconBrandGmail,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandTelegram,
	IconBrandWhatsapp,
	IconDeviceMobileMessage,
	IconPhonePlus,
	IconUserQuestion,
} from "@tabler/icons-react";
import ScrollButton from "../components/Scrollbutton";
import { IconPhoneCall } from "@tabler/icons-react";
const Home = () => {
	const { theme, setTheme } = React.useContext(ThemeContext);
	useEffect(() => {
		console.log("theme changed to", theme);
	}, [theme]);
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
								An Aspiring{" "}
								<span className="text-accent">
									Data Scientist
								</span>
								, a Full Stack Developer, and a 3rd year
								Undergrad at MITWPU in Pune.
							</div>
						</div>
					</div>
				</div>
				<button
					className="btn btn-primary btn-lg m-4 mt-10"
					onClick={() => {
						document
							.getElementById("projects_section")
							.scrollIntoView({ behavior: "smooth" });
					}}
				>
					Learn More about Me <ArrowDownIcon className="w-5 h-5" />
				</button>
			</div>
			<section></section>
			<div class="wrapper pb-9">.
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
					coding. They span across fields like
					<span className="text-accent">
						{" "}
						Software Development, Data Science, App Dev and Web Dev.
					</span>{" "}
					My primary focus has been on Data Science and Web Dev.
				</div>
				<NavLink to={"/projects"} className="m-4 mt-10">
					<button className="btn btn-secondary btn-lg ">
						Visit My Projects{" "}
						<ArrowUpRightIcon className="w-5 h-5" />
					</button>
				</NavLink>
			</section>
			<div class="wrapper pb-9">.
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
				<IconUserQuestion className="w-24 h-24" />
				<div className="text-center text-2xl p-4 m-4 break-words">
					I am a 3rd Year Undergrad at MIT World Peace Univeristy in
					Pune, pursuing my Bachelors in Computer Science, Majoring in
					<span className="text-accent">
						{" "}
						Cyber Security and Forensics.
					</span>
					<br></br>
					<br></br>I am a Full Stack Developer, and a Data Science
					Enthusiast. I've completed my education from{" "}
					<span className="text-accent">
						{" "}
						Tanzania, Qatar and India.
					</span>
					Fortunately, Along the road, I've had the opportunity to
					learn a lot of interesting things, and meet a lot of
					interesting people!
					<br></br>
					<br></br>
					Visit my about page to know more about my background and
					perhaps a little more about me...
				</div>
				<NavLink to={"/about"} className="m-4 mt-10">
					<button className="btn btn-secondary btn-lg ">
						Learn More
						<ArrowUpRightIcon className="w-5 h-5" />
					</button>
				</NavLink>
			</section>
			<div class="wrapper pb-9">.
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
				<IconDeviceMobileMessage className="w-24 h-24" />
				<div className="text-center text-2xl p-4 m-4">
					You can contact me via my Email, Phone or any social Media.
					I am always open to new opportunities and collaborations,
					and always happy to help.
					<div className="flex flex-wrap gap-4 m-4 justify-center mt-20">
						<button
							className="btn btn-neutral btn-circle btn-lg"
							onClick={() => {
								// copy the phone number to clipboard
								// show the toast
								navigator.clipboard.writeText("+91 9834312135");
								const toast = document.querySelector(".toast");
								toast.classList.remove("hidden");
								setTimeout(() => {
									toast.classList.add("hidden");
								}, 2000);
								// show toast
								// open the phone app
								// window.open("tel:+919834312135", "_blank");
							}}
						>
							<IconPhoneCall className="w-8 h-8" />
						</button>
						<button
							className="btn btn-neutral btn-circle btn-lg"
							onClick={() => {
								window.open("https://wa.link/zu05s5", "_blank");
							}}
						>
							<IconBrandWhatsapp className="w-8 h-8" />
						</button>
						<button
							className="btn btn-neutral btn-circle btn-lg"
							onClick={() => {
								window.open(
									"mailto:kpt.krishnaraj@gmail.com",
									"_blank"
								);
							}}
						>
							<IconBrandGmail className="w-8 h-8" />
						</button>
						<button
							className="btn btn-neutral btn-circle btn-lg"
							onClick={() => {
								window.open(
									"https://www.github.com/KrishnarajT",
									"_blank"
								);
								navigator.clipboard.writeText(
									"https://www.github.com/KrishnarajT"
								);
								const toast = document.querySelector(".toast");
								toast.classList.remove("hidden");
								setTimeout(() => {
									toast.classList.add("hidden");
								}, 2000);
							}}
							// copy to clipboard and show toast.
						>
							<IconBrandGithub className="w-8 h-8" />
						</button>
						<button
							className="btn btn-neutral btn-circle btn-lg"
							onClick={() => {
								window.open(
									"https://t.me/KrishnarajT",
									"_blank"
								);
							}}
						>
							<IconBrandTelegram className="w-8 h-8" />
						</button>
						<button
							className="btn btn-neutral btn-circle btn-lg"
							onClick={() => {
								window.open(
									"https://www.linkedin.com/in/krishnaraj-thadesar-2541451b9/",
									"_blank"
								);
							}}
						>
							<IconBrandLinkedin className="w-8 h-8" />
						</button>
						<button
							className="btn btn-neutral btn-circle btn-lg"
							onClick={() => {
								window.open(
									"https://www.instagram.com/krish11235/",
									"_blank"
								);
							}}
						>
							<IconBrandInstagram className="w-8 h-8" />
						</button>
						<button
							className="btn btn-neutral btn-circle btn-lg"
							onClick={() => {
								window.open(
									"https://discordapp.com/users/Krishnaraj#2271",
									"_blank"
								);
							}}
						>
							<IconBrandDiscord className="w-8 h-8" />
						</button>
						{/* <button
							className="btn btn-neutral btn-circle btn-lg"
							onClick={() => {
								window.open(
									"https://stackoverflow.com/users/14205274/krishnaraj-pt",
									"_blank"
								);
							}}
						>
							<IconBrandStackoverflow className="w-8 h-8" />
						</button> */}
					</div>
				</div>
				<NavLink to={"/contact"} className="m-4 mt-10">
					<button className="btn btn-secondary btn-lg ">
						Let's get in touch !
						<IconPhonePlus className="w-5 h-5" />
					</button>
				</NavLink>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			</section>
			<div class="wrapper pb-9">.
				<div
					className={
						theme === "light"
							? "divider-light div-transparent-light"
							: "divider-dark div-transparent-dark"
					}
				></div>
			</div>
			<ScrollButton />
			<div className="toast toast-bottom toast-center duration-300 transform-gpu ease-in-out hidden">
				<div className="alert alert-success">
					<span className="flex items-center gap-4 text-2xl">
						<CheckBadgeIcon className="w-10 h-10" />
						Copied to Clipboard!
					</span>
				</div>
			</div>
		</div>
	);
};

export default Home;
