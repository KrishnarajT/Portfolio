const projects_major = [
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 2",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: false,
	},
	{
		title: "Project 3",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 4",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: false,
	},
	{
		title: "Project 5",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
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
	{
		title: "Project 2",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: false,
	},
	{
		title: "Project 3",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 4",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: false,
	},
	{
		title: "Project 5",
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
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 2",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: false,
	},
	{
		title: "Project 3",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 4",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: false,
	},
	{
		title: "Project 5",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
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
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 2",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: false,
	},
	{
		title: "Project 3",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 4",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: false,
	},
	{
		title: "Project 5",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
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
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 1",
		description: "This is a project",
		// image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 2",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: false,
	},
	{
		title: "Project 3",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: true,
	},
	{
		title: "Project 4",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
		link: "https://www.google.com",
		tags: ["Project"],
		new: false,
	},
	{
		title: "Project 5",
		description: "This is a project",
		image: "https://source.unsplash.com/random",
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
