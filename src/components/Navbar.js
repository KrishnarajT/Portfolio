import React, { useEffect } from "react";
import "../input.css";
import "../style.css";
import { themeChange } from "theme-change";
import { ThemeContext } from "../context/ThemeContext";

import {
	SunIcon,
	MoonIcon,
	BookmarkIcon,
	DevicePhoneMobileIcon,
	HomeModernIcon,
	HomeIcon,
	InformationCircleIcon,
	UserCircleIcon,
	Bars3BottomLeftIcon,
	Bars3Icon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";
import { IconUserBolt } from "@tabler/icons-react";

export function Navbar() {
	useEffect(() => {
		themeChange(false);
	}, []);

	const { theme, setTheme } = React.useContext(ThemeContext);
	
	return (
		<div className="pr-4 mr-4">
			<div
				className="navbar bg-secondary rounded-xl text-secondary-content flex-row-reverse justify-between m-4 
			md:flex-row"
			>
				{/* name */}
				<div
					className="flex-row-reverse px-2 gap-0
			md:flex-row"
				>
					{/* <UserCircleIcon className="w-8 h-8" /> */}
					<IconUserBolt className="w-8 h-8" />
					<NavLink to={"/"}>
						<div className="btn btn-ghost normal-case text-lg md:text-2xl">
							Krishnaraj
						</div>
					</NavLink>
				</div>
				{/* maincontents */}
				<div
					className="hidden
			   md:flex"
				>
					<ul className="menu menu-horizontal px-1">
						<li className="text-lg md:text-2xl">
							<NavLink to={"/projects"} id="contact_element">
								<BookmarkIcon className="w-8 h-8" />
								Projects
							</NavLink>
						</li>
						<li className="text-lg md:text-2xl">
							<NavLink to={"/about"} id="contact_element">
								<InformationCircleIcon className="w-8 h-8" />
								About
							</NavLink>
						</li>
						<li className="text-lg md:text-2xl">
							<NavLink to={"/contact"} id="contact_element">
								<DevicePhoneMobileIcon className="w-8 h-8" />
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
				{/* Theme */}
				<div className="hidden md:flex">
					<ul className="menu menu-horizontal px-1">
						<li>
							<details>
								<summary className="text-lg md:text-2xl">
									Theme
								</summary>
								<ul className="p-2 bg-base-100 text-base-content">
									<li
										data-set-theme="cupcake"
										className="text-lg"
									>
										<a>
											<SunIcon className="w-8 h-8" />
											Light
										</a>
									</li>
									<li
										className="text-lg"
										data-set-theme="dracula"
									>
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

				{/* hamburger */}
				<div className="md:hidden">
					<ul className="menu menu-horizontal px-1">
						<li>
							<details>
								<summary className="text-lg md:text-2xl">
									<Bars3Icon className="w-8 h-8" />
								</summary>
								<ul className="p-2 bg-base-100 text-base-content">
									<li className="text-lg md:text-2xl">
										<NavLink
											to={"/projects"}
											id="contact_element"
										>
											<BookmarkIcon className="w-8 h-8" />
											Projects
										</NavLink>
									</li>
									<li className="text-lg md:text-2xl">
										<NavLink
											to={"/about"}
											id="contact_element"
										>
											<InformationCircleIcon className="w-8 h-8" />
											About
										</NavLink>
									</li>
									<li className="text-lg md:text-2xl">
										<NavLink
											to={"/contact"}
											id="contact_element"
										>
											<DevicePhoneMobileIcon className="w-8 h-8" />
											Contact
										</NavLink>
									</li>
									<li className="menu menu-horizontal px-1 ">
										<details>
											<summary className="text-lg md:text-2xl">
												Theme
											</summary>
											<ul className="p-2 bg-base-100 text-base-content">
												<li
													data-set-theme="cupcake"
													className="text-lg"
												>
													<a>
														<SunIcon className="w-8 h-8" />
														Light
													</a>
												</li>
												<li
													className="text-lg"
													data-set-theme="dracula"
												>
													<a>
														<MoonIcon className="w-8 h-6" />
														Dark
													</a>
												</li>
											</ul>
										</details>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
