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

const projects_dev = [
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

// now reorder the list based on new projects_dev:
const new_projects_dev = projects_dev.filter((project) => project.new === true);
const old_projects_dev = projects_dev.filter(
	(project) => project.new === false
);
export const ordered_projects_dev = [...new_projects_dev, ...old_projects_dev];
