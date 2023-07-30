const projects_major = [];

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
		title: "Thoda Upar Thoda Neeche",
		description:
			"It is a very simple and basic Casual Slider game you can play to pass time. Now on the Play Store",
		image: "https://github.com/KrishnarajT/Thoda-Upar-Thoda-Neeche/raw/main/Screenshots/Presentation.png",
		link: "https://play.google.com/store/apps/details?id=com.krishnaraj.thoda_upar_thoda_neeche",
		tags: ["Play Store", "Game", "App", "Android"],
		new: true,
	},
	{
		title: "Chit Chat Charts",
		description:
			"A Pyqt app made for visualizing and analyzing Chat data and texts between you and your friends.",
		image: "https://github.com/KrishnarajT/Chit-Chat-Charts/raw/main/Example/Graphs/krishnaraj%20with%20friend%20Top%2020%20Words.jpg",
		link: "https://github.com/KrishnarajT/Chit-Chat-Charts",
		tags: ["Data Analysis"],
		new: true,
	},
	{
		title: "Poco Loco",
		description:
			"Music Player Made with Vanilla JS. Themed on the Movie Coco.",
		image: "https://github.com/KrishnarajT/Poco-Loco/raw/main/doc/Screenshots/login.png",
		link: "https://github.com/KrishnarajT/Poco-Loco",
		tags: ["Js", "Website"],
		new: true,
	},
	{
		title: "Quotepaper Designer",
		description:
			"CLI Tool to add quotes from wikiquotes to images from your favourite shows and make wallpapers from those scenes.",
		image: "https://github.com/KrishnarajT/Quotepaper-Designer/raw/master/Shows/The%20Mentalist/s02%20-%2047.jpg",
		link: "https://github.com/KrishnarajT/Quotepaper-Designer",
		tags: ["App", "Desktop"],
		new: false,
	},
	{
		title: "Visually Sorting Arrays",
		description:
			"Shows visually the way all the top 10 sorting algorithms work, by allowing you to choose from a variety of ranges",
		image: "https://github.com/KrishnarajT/Visually-Sorting-Arrays/raw/master/Screenshots/quick.png",
		link: "https://github.com/KrishnarajT/Tippy",
		tags: ["Desktop"],
		new: false,
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
		tags: ["App", "Android"],
		new: true,
	},
	{
		title: "To Do App",
		description: "Simple App to List Todo Tasks.",
		image: "https://github.com/KrishnarajT/Todo-App/blob/main/Screenshots/Apple%20iPhone%2011%20Pro%20Max%20Presentation.png?raw=true",
		link: "https://github.com/KrishnarajT/Todo-App",
		tags: ["App", "Android"],
		new: false,
	},
	{
		title: "What My No",
		description: "Simple Guessing Game made to learn React Native.",
		image: "https://github.com/KrishnarajT/What-my-no/raw/main/screenshots/presentation.jpg",
		link: "https://github.com/KrishnarajT/What-my-no",
		tags: ["Game", "App", "Android"],
		new: false,
	},

	{
		title: "Quotepaper Designer",
		description:
			"CLI Tool to add quotes from wikiquotes to images from your favourite shows and make wallpapers from those scenes.",
		image: "https://github.com/KrishnarajT/Quotepaper-Designer/raw/master/Shows/The%20Mentalist/s02%20-%2047.jpg",
		link: "https://github.com/KrishnarajT/Quotepaper-Designer",
		tags: ["App", "Desktop"],
		new: false,
	},
	{
		title: "Currency Converter",
		description:
			"A simple PyQt GUI for Converting Currencies, Graphically Viewing Historical Data and Plotting the last week's Rates.",
		image: "https://github.com/KrishnarajT/Currency-Converter/raw/main/Screenshots/Currency_converter_ss%201.png",
		link: "https://github.com/KrishnarajT/Currency-Converter",
		tags: ["App", "Desktop"],
		new: false,
	},
	{
		title: "Kappa Video Downloader",
		description:
			"A simple youtube Video Downloader made with Python for 12th Project.",
		image: "https://github.com/KrishnarajT/IP-Project-Youtube-Video-Downloader/raw/main/Progress%20Images/12-11-20/Progress%20Screenshots%20(3).png",
		link: "https://github.com/KrishnarajT/IP-Project-Youtube-Video-Downloader",
		tags: ["Desktop"],
		new: false,
	},
	{
		title: "Visually Sorting Arrays",
		description:
			"Shows visually the way all the top 10 sorting algorithms work, by allowing you to choose from a variety of ranges",
		image: "https://github.com/KrishnarajT/Visually-Sorting-Arrays/raw/master/Screenshots/quick.png",
		link: "https://github.com/KrishnarajT/Tippy",
		tags: ["Desktop"],
		new: false,
	},
	{
		title: "Visually Sorting Arrays",
		description:
			"Realtime GUI for Monitoring vitals of a Hyperloop Pod made with Python and PyQt5, for MITWPU Vegapod Team.",
		image: "https://github.com/KrishnarajT/Vegapod-New-GUI/raw/main/Screenshots/graph.png",
		link: "https://github.com/KrishnarajT/Vegapod-New-GUI",
		tags: ["Desktop"],
		new: false,
	},
	{
		title: "Ambulance Detector",
		description:
			"IOT Project by our group, for detecting an ambulance passing through a signal with a Raspberry Pi with a Camera Module.",
		image: "https://github.com/KrishnarajT/Ambulance-Detector/raw/main/Pics/IOT%20Project%206.jpg",
		link: "https://github.com/KrishnarajT/Ambulance-Detector",
		tags: ["Desktop", "Raspberry Pi", "Object Detection"],
		new: false,
	},
	{
		title: "Tippy",
		description: "Simple App to Calculate Tips",
		// image: "https://source.unsplash.com/random",
		link: "https://github.com/KrishnarajT/Tippy",
		tags: ["App", "Android"],
		new: false,
	},
	{
		title: "Car Game",
		description: "Extremely Simple Driving Game in Unity.",
		image: "https://github.com/KrishnarajT/Car-Game/raw/main/screenshot.jpeg",
		link: "https://github.com/KrishnarajT/Car-Game",
		tags: ["Game", "App", "Android"],
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
		title: "CP from Here",
		description:
			"A simple website to host a file that would contain anything that I want to share with my friends or anyone anywhere.",
		// image: "https://source.unsplash.com/random",
		link: "https://github.com/KrishnarajT/Copy-from-here",
		tags: ["Project"],
		new: false,
	},
	{
		title: "Portfolio Page",
		description: "That would be this website!",
		image: "",
		link: "https://github.com/KrishnarajT/Portfolio",
		tags: ["Project"],
		new: false,
	},
	{
		title: "Password Generator",
		description:
			"A Custom Password Generator So I dont have to remember them anymore. ",
		image: "https://github.com/KrishnarajT/Password-Generator/raw/main/design/screenshots/home_page_light.png",
		link: "https://github.com/KrishnarajT/Password-Generator",
		tags: ["Cyber", "Website"],
		new: true,
	},
	{
		title: "Poco Loco",
		description:
			"Music Player Made with Vanilla JS. Themed on the Movie Coco.",
		image: "https://github.com/KrishnarajT/Poco-Loco/raw/main/doc/Screenshots/login.png",
		link: "https://github.com/KrishnarajT/Poco-Loco",
		tags: ["Js", "Website"],
		new: true,
	},
	{
		title: "Image Searcher",
		description:
			"A place to search for images, from free and creditable sources and their APIs",
		image: "https://github.com/KrishnarajT/Images-Searcher/raw/main/Screenshots/ss.png",
		link: "https://github.com/KrishnarajT/Images-Searcher",
		tags: ["Js", "Website"],
		new: false,
	},
	{
		title: "Quotepaper Generator",
		description:
			"Generate random quotes as wallpapers, with auto relevant background images.",
		image: "https://github.com/KrishnarajT/Quotepaper-Generator/raw/main/images/quotes1.png",
		link: "https://github.com/KrishnarajT/Quotepaper-Generator",
		tags: ["Js", "Website"],
		new: false,
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
		title: "What My No",
		description: "Simple Guessing Game made to learn React Native.",
		image: "https://github.com/KrishnarajT/What-my-no/raw/main/screenshots/presentation.jpg",
		link: "https://github.com/KrishnarajT/What-my-no",
		tags: ["Game", "App", "Android"],
		new: true,
	},

	{
		title: "Game of Memories",
		description: "A simple Memory Game themed on Game of Thrones",
		image: "https://github.com/KrishnarajT/Game-of-Memories/raw/main/game-of-memories.gif",
		link: "https://github.com/KrishnarajT/Game-of-Memories",
		tags: ["Game", "Website"],
		new: false,
	},
	{
		title: "Snap A Mole",
		description:
			"Yet another Simple Website, the classic Wack a Mole game, in Avengers Style",
		image: "https://github.com/KrishnarajT/Snap-A-Mole/raw/main/screenshots.gif",
		link: "https://github.com/KrishnarajT/Snap-A-Mole",
		tags: ["Game", "Website"],
		new: false,
	},
	{
		title: "How Much",
		description: "Simple Guessing Game made to learn React Native.",
		image: "https://github.com/KrishnarajT/How-Much/raw/main/design/Screenshots/Game%20Play.gif",
		link: "https://github.com/KrishnarajT/How-Much",
		tags: ["Game"],
		new: true,
	},

	{
		title: "KlikWick",
		description: "A Game in HTML CSS and Js to Check your Reflexes.",
		image: "https://github.com/KrishnarajT/KlikWick/raw/main/screenshots/light.png",
		link: "https://github.com/KrishnarajT/KlikWick",
		tags: ["Game", "JS"],
		new: true,
	},
	{
		title: "Brick Breaker",
		description: "The classic Brick Breaker Game, in HTML, CSS and Js",
		image: "https://github.com/KrishnarajT/Brick-Breaker/raw/main/screenshots.gif",
		link: "https://github.com/KrishnarajT/Brick-Breaker",
		tags: ["Game"],
		new: false,
	},
	{
		title: "Tetris",
		description: "A simple Tetris Game using Pygame",
		image: "https://github.com/KrishnarajT/Tetris/raw/main/screenshots/tetris.gif",
		link: "https://github.com/KrishnarajT/Tetris",
		tags: ["Game"],
		new: false,
	},

	{
		title: "The Hangman project in C++",
		description:
			"The classic usual hangman Game, in C++, with graphics and a Marvel and John Wick theme.",
		image: "https://github.com/KrishnarajT/The-Hangman-Project/raw/master/Screenshots/HangMan_praiyHWOTy.png",
		link: "https://github.com/KrishnarajT/The-Hangman-Project",
		tags: ["Game"],
		new: false,
	},

	{
		title: "Icy",
		description: "A game to test your Colorblindness",
		image: "https://github.com/KrishnarajT/Icy/raw/master/Screenshots/Icy%20(2).png",
		link: "https://github.com/KrishnarajT/Icy",
		tags: ["Game"],
		new: false,
	},
	{
		title: "Space Wars",
		description: "Space Wars in Python. My First Python Game.",
		image: "https://github.com/KrishnarajT/Space-Wars-Ship-thing/raw/master/Screenshots/Space%20Wars.png",
		link: "https://github.com/KrishnarajT/Space-Wars-Ship-thing",
		tags: ["Game"],
		new: false,
	},

	{
		title: "Pong",
		description: "Classic Pong made in Java Swing",
		image: "https://github.com/KrishnarajT/Pong/raw/main/screenshots/3.png",
		link: "https://github.com/KrishnarajT/Pong",
		tags: ["Game"],
		new: false,
	},
	{
		title: "Is It Your Time? ",
		description:
			"This is one of my first full Games written entirely in C++. Game to guess the Right time",
		image: "https://github.com/KrishnarajT/Is-it-Your-Time-/raw/master/Screenshots/Is_It_Your_TIme_Rs0gcVDXbb.png",
		link: "https://github.com/KrishnarajT/Is-it-Your-Time-",
		tags: ["Game"],
		new: false,
	},
	{
		title: "Super T Rex Bros",
		description: "Combination of the Chrome Dino Game and Mario",
		image: "https://github.com/KrishnarajT/Dino-Game/raw/master/Screenshots/Dino_Game_aepbW4WFhY.png",
		link: "https://github.com/KrishnarajT/Dino-Game",
		tags: ["Game"],
		new: false,
	},
	{
		title: "2048",
		description: "The classic 2048 Game, made with Pygame and Python",
		image: "https://github.com/KrishnarajT/2048/raw/master/Screenshots/2048.png",
		link: "https://github.com/KrishnarajT/2048",
		tags: ["Game", "Python"],
		new: false,
	},
	{
		title: "Classic Cube",
		description:
			"This is the game I made in Unity 3D after following the Brackeys tutorial on Youtube.",
		image: "",
		link: "https://github.com/KrishnarajT/Cube-Game",
		tags: ["Game", "Unity"],
		new: false,
	},
	{
		title: "Rock Paper Scissors",
		description: "A Simple Rock-Paper-Scissors game with Js",
		image: "https://github.com/KrishnarajT/Rock-Paper-Scissors/raw/main/Screenshot.png",
		link: "https://github.com/KrishnarajT/Rock-Paper-Scissors",
		tags: ["Game", "JS", "Website"],
		new: false,
	},
	{
		title: "Snake Xensia",
		description:
			"The Classic Snake Game Made by Me and My Friend Aasim in C++",
		image: "https://github.com/KrishnarajT/Snake-Game-/raw/master/Screenshots/Screenshot%20on%2017-12-21%20at%2014-10-52.jpg",
		link: "https://github.com/KrishnarajT/Snake-Game-",
		tags: ["Game", "C++", "SFML"],
		new: false,
	},
	{
		title: "Car Game",
		description: "Extremely Simple Driving Game in Unity.",
		image: "https://github.com/KrishnarajT/Car-Game/raw/main/screenshot.jpeg",
		link: "https://github.com/KrishnarajT/Car-Game",
		tags: ["Game", "App", "Android"],
		new: false,
	},
	{
		title: "Puzzlelists",
		description:
			"An Arcade which has many small Puzzle kinda games in it. Also the Python Project for Second Year",
		image: "https://github.com/KrishnarajT/PuzzleLists/raw/main/documentation/screenshots/welcome_screen.png",
		link: "https://github.com/KrishnarajT/Car-Game",
		tags: ["Game", "App", "Python"],
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
