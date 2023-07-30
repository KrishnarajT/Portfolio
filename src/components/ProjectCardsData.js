const projects_major = [
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
];

// now reorder the list based on new projects_major:
const new_projects_major = projects_major.filter(
	(project) => project.new === true
);
const old_projects_major = projects_major.filter(
	(project) => project.new === false
);
export const ordered_projects_major = [
	...new_projects_major,
	...old_projects_major,
];

const projects_mlds = [
	{
		title: "Project 1",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
];

// now reorder the list based on new projects_mlds:
const new_projects_mlds = projects_mlds.filter(
	(project) => project.new === true
);
const old_projects_mlds = projects_mlds.filter(
	(project) => project.new === false
);
export const ordered_projects_mlds = [
	...new_projects_mlds,
	...old_projects_mlds,
];

// app development projects
const projects_app = [
	{
		title: "Thoda Upar Thoda Neeche",
		description:
			"It is a very simple and basic Casual Slider game you can play to pass time. Now on the Play Store",
		image: "https://github.com/KrishnarajT/Thoda-Upar-Thoda-Neeche/raw/main/Screenshots/Presentation.png",
		link: "https://play.google.com/store/apps/details?id=com.krishnaraj.thoda_upar_thoda_neeche",
		tags: ["Play Store", "Game", "App", "Android"],
		new: true,
	},
	{
		title: "Favourite Places",
		description:
			"App to Record your Favourite Places with Images and Location. ",
		image: "https://github.com/KrishnarajT/Favourite-Places/blob/main/screenshots/Presentation%20Dark.jpg?raw=true",
		link: "https://github.com/KrishnarajT/Favourite-Places",
		tags: ["Play Store", "Game", "App", "Android"],
		new: true,
	},
	{
		title: "To Do App",
		description: "Simple App to List Todo Tasks.",
		image: "https://github.com/KrishnarajT/Todo-App/blob/main/Screenshots/Apple%20iPhone%2011%20Pro%20Max%20Presentation.png?raw=true",
		link: "https://github.com/KrishnarajT/Todo-App",
		tags: ["Play Store", "Game", "App", "Android"],
		new: false,
	},
	{
		title: "Car Game",
		description: "Extremely Simple Driving Game in Unity.",
		image: "https://github.com/KrishnarajT/Car-Game/raw/main/screenshot.jpeg",
		link: "https://github.com/KrishnarajT/Car-Game",
		tags: ["Play Store", "Game", "App", "Android"],
		new: false,
	},
	{
		title: "Tippy",
		description: "Simple App to Calculate Tips",
		// image: "https://source.unsplash.com/random",
		link: "https://github.com/KrishnarajT/Tippy",
		tags: ["Play Store", "Game", "App", "Android"],
		new: false,
	},
];

// now reorder the list based on new projects_app:
const new_projects_app = projects_app.filter((project) => project.new === true);
const old_projects_app = projects_app.filter(
	(project) => project.new === false
);
export const ordered_projects_app = [...new_projects_app, ...old_projects_app];

const projects_web = [
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
];

// now reorder the list based on new projects_web:
const new_projects_web = projects_web.filter((project) => project.new === true);
const old_projects_web = projects_web.filter(
	(project) => project.new === false
);
export const ordered_projects_web = [...new_projects_web, ...old_projects_web];

const projects_game = [
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
];

// now reorder the list based on new projects_game:
const new_projects_game = projects_game.filter(
	(project) => project.new === true
);
const old_projects_game = projects_game.filter(
	(project) => project.new === false
);
export const ordered_projects_game = [
	...new_projects_game,
	...old_projects_game,
];
