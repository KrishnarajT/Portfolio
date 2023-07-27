import React from "react";
import { NavLink } from "react-router-dom";
import {
	IconBrandDiscord,
	IconBrandGithub,
	IconBrandGmail,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandStackoverflow,
	IconBrandTelegram,
	IconBrandWhatsapp,
	IconDeviceMobileMessage,
	IconPhoneCall,
	IconPhonePlus,
} from "@tabler/icons-react";
import { ThemeContext } from "../context/ThemeContext";
import { ArrowUpRightIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";


const Contact = () => {
	return (
		<div className="">
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
						<button
							className="btn btn-neutral btn-circle btn-lg"
							onClick={() => {
								window.open(
									"https://stackoverflow.com/users/14205274/krishnaraj-pt",
									"_blank"
								);
							}}
						>
							<IconBrandStackoverflow className="w-8 h-8" />
						</button>
					</div>
				</div>
				<div className="flex flex-row gap-4 justify-center">


				<NavLink to={"/projects"} className="m-4">
					<button className="btn btn-secondary btn-lg ">
						Visit Projects{" "}
						<ArrowUpRightIcon className="w-5 h-5" />
					</button>
				</NavLink>
				<NavLink to={"/about"} className="m-4">
					<button className="btn btn-secondary btn-lg ">
						Learn more about Me <ArrowUpRightIcon className="w-5 h-5" />
					</button>
				</NavLink>
				</div>
			</section>
			<div className="toast toast-bottom toast-center duration-300 transform-gpu ease-in-out hidden md:toast-end">
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

export default Contact;
