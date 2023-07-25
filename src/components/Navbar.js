import React, { useEffect } from "react";
import "../input.css";
import "../style.css";
import { themeChange } from "theme-change";
// import the sun icon from heroicons
import {
	SunIcon,
	MoonIcon,
	BookmarkIcon,
	DevicePhoneMobileIcon,
	HomeModernIcon,
	HomeIcon,
	InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

export function Navbar() {
	useEffect(() => {
		themeChange(false);
	}, []);
	return (
		<div className="navbar bg-base-300 rounded-xl text-primary-content">
			<div className="">
				<NavLink to={"/"}>
					<a className="btn btn-ghost normal-case text-3xl">
						Krishnaraj
					</a>
				</NavLink>
			</div>
			<div className="flex-row justify-center flex-1">
				<ul className="menu menu-horizontal px-1">
					<li className="text-2xl">
						<NavLink to={"/projects"} id="contact_element">
							<BookmarkIcon className="w-8 h-8" />
							Projects
						</NavLink>
					</li>
					<li className="text-2xl">
						<NavLink to={"/about"} id="contact_element">
							<InformationCircleIcon className="w-8 h-8" />
							About
						</NavLink>
					</li>
					<li className="text-2xl">
						<NavLink to={"/contact"} id="contact_element">
							<DevicePhoneMobileIcon className="w-8 h-8" />
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
			<div>
				<ul className="menu menu-horizontal px-1">
					<li>
						<details>
							<summary className="text-2xl">Theme</summary>
							<ul className="p-2 bg-base-100">
								<li
									data-set-theme="cupcake"
									className="text-xl"
								>
									<a>
										<SunIcon className="w-8 h-8" />
										Light
									</a>
								</li>
								<li className="text-xl" data-set-theme="black">
									<a>
										<MoonIcon className="w-8 h-6" />
										Dark
									</a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</div>
	);
}
