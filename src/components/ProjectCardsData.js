const projects_major = [
	{
		title: "Poco Loco",
		description: "Music Player Made with Vanilla JS. Themed on the Movie Coco.",
		image: "https://github.com/KrishnarajT/Poco-Loco/raw/main/doc/Screenshots/login.png",
		link: "https://github.com/KrishnarajT/Poco-Loco",
		tags: ["Js", "Website", "React"],
		new: true,
	},
	{
		title: "Anti Brutus",
		description:
			"A Password Manager, and Generator, built with Security and Encryption in mind.",
		image: "https://github.com/KrishnarajT/Anti-Brutus/raw/main/design/anti-brutus.gif",
		link: "https://github.com/KrishnarajT/Anti-Brutus",
		tags: ["Js", "Website", "React"],
		new: true,
	},
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
		title: "How Much",
		description: "Simple Guessing Game made to learn React Native.",
		image: "https://github.com/KrishnarajT/How-Much/raw/main/design/Screenshots/Game%20Play.gif",
		link: "https://github.com/KrishnarajT/How-Much",
		tags: ["Game"],
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
	{
		title: "Puzzlelists",
		description:
			"An Arcade which has many small Puzzle kinda games in it. Also the Python Project for Second Year",
		image: "https://github.com/KrishnarajT/PuzzleLists/raw/main/documentation/screenshots/welcome_screen.png",
		link: "https://github.com/KrishnarajT/Car-Game",
		tags: ["Game", "App", "Python"],
		new: true,
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
];

// now reorder the list based on new projects_major:
const new_projects_major = projects_major.filter((project) => project.new === true);
const old_projects_major = projects_major.filter((project) => project.new === false);
export const ordered_projects_major = [...new_projects_major, ...old_projects_major];

const projects_mlds = [
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
		title: "Currency Converter",
		description:
			"A simple PyQt GUI for Converting Currencies, Graphically Viewing Historical Data and Plotting the last week's Rates.",
		image: "https://github.com/KrishnarajT/Currency-Converter/raw/main/Screenshots/Currency_converter_ss%203.png",
		link: "https://github.com/KrishnarajT/Currency-Converter",
		tags: ["Desktop"],
		new: false,
	},
	{
		title: "Vegapod GUI",
		description:
			"Realtime GUI for Monitoring vitals of a Hyperloop Pod made with Python and PyQt5, for MITWPU Vegapod Team.",
		image: "https://github.com/KrishnarajT/Vegapod-New-GUI/raw/main/Screenshots/graph.png",
		link: "https://github.com/KrishnarajT/Vegapod-New-GUI",
		tags: ["Desktop"],
		new: false,
	},
	{
		title: "Router Log Analysis",
		description:
			"Analysing Simluated Router Logs from fabricated scenarios of common Attacks possible on a household. Part of Digital Forensics and Investigation Activity.",
		image: "https://github.com/KrishnarajT/Router-Log-Analysis/raw/main/router_log_analysis_graphs/normal_hourly_usage.png",
		link: "https://github.com/KrishnarajT/Router-Log-Analysis",
		tags: ["Analysis", "Cybersecurity", "Forensics"],
		new: false,
	},
];

// now reorder the list based on new projects_mlds:
const new_projects_mlds = projects_mlds.filter((project) => project.new === true);
const old_projects_mlds = projects_mlds.filter((project) => project.new === false);
export const ordered_projects_mlds = [...new_projects_mlds, ...old_projects_mlds];

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
		description: "App to Record your Favourite Places with Images and Location. ",
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
		description: "A simple youtube Video Downloader made with Python for 12th Project.",
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
		title: "Vegapod GUI",
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
const old_projects_app = projects_app.filter((project) => project.new === false);
export const ordered_projects_app = [...new_projects_app, ...old_projects_app];

const projects_web = [
	{
		title: "Anti Brutus",
		description:
			"A Password Manager, and Generator, built with Security and Encryption in mind.",
		image: "https://github.com/KrishnarajT/Anti-Brutus/raw/main/design/anti-brutus.gif",
		link: "https://github.com/KrishnarajT/Anti-Brutus",
		tags: ["Js", "Website", "React"],
		new: true,
	},
	{
		title: "Portfolio Page",
		description: "That would be this website!",
		image: "https://github.com/KrishnarajT/Portfolio/blob/main/src/assets/img/screenshot.png?raw=true",
		link: "https://github.com/KrishnarajT/Portfolio",
		tags: ["Project"],
		new: true,
	},

	{
		title: "Password Generator",
		description: "A Custom Password Generator So I dont have to remember them anymore. ",
		image: "https://github.com/KrishnarajT/Password-Generator/raw/main/design/screenshots/home_page_light.png",
		link: "https://github.com/KrishnarajT/Password-Generator",
		tags: ["Cyber", "Website"],
		new: true,
	},
	{
		title: "Poco Loco",
		description: "Music Player Made with Vanilla JS. Themed on the Movie Coco.",
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
		description: "Generate random quotes as wallpapers, with auto relevant background images.",
		image: "https://github.com/KrishnarajT/Quotepaper-Generator/raw/main/images/quotes1.png",
		link: "https://github.com/KrishnarajT/Quotepaper-Generator",
		tags: ["Js", "Website"],
		new: false,
	},
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
		title: "Game of Memories",
		description: "A simple Memory Game themed on Game of Thrones",
		image: "https://github.com/KrishnarajT/Game-of-Memories/raw/main/game-of-memories.gif",
		link: "https://github.com/KrishnarajT/Game-of-Memories",
		tags: ["Game", "Website"],
		new: false,
	},
	{
		title: "Snap A Mole",
		description: "Yet another Simple Website, the classic Wack a Mole game, in Avengers Style",
		image: "https://github.com/KrishnarajT/Snap-A-Mole/raw/main/screenshots.gif",
		link: "https://github.com/KrishnarajT/Snap-A-Mole",
		tags: ["Game", "Website"],
		new: false,
	},
	{
		title: "Brick Breaker",
		description: "The classic Brick Breaker Game, in HTML, CSS and Js",
		image: "https://github.com/KrishnarajT/Brick-Breaker/raw/main/screenshots.gif",
		link: "https://github.com/KrishnarajT/Brick-Breaker",
		tags: ["Game"],
		new: false,
	},
];

// now reorder the list based on new projects_web:
const new_projects_web = projects_web.filter((project) => project.new === true);
const old_projects_web = projects_web.filter((project) => project.new === false);
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
		description: "Yet another Simple Website, the classic Wack a Mole game, in Avengers Style",
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
		description: "The Classic Snake Game Made by Me and My Friend Aasim in C++",
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

// presentations

export const presentations = [
	{
		title: "An Orbit around Galileo's Life",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2022%5D_%5B1st_Yr%5D_An_Orbit_Around_Galileo_Galilie's_Life.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2022%5D%20%5B1st%20Yr%5D%20An%20Orbit%20Around%20Galileo%20Galilie's%20Life.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Electromagnetic Waves",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2023%5D_%5B3rd_Yr%5D_Electromagnetic_Waves_in_WMDS.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2023%5D%20%5B3rd%20Yr%5D%20Electromagnetic%20Waves%20in%20WMDS.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Gender Equality",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2024%5D%5B3rd_Yr%5D_Peace_PPT_for_SDG_-_Gender_Equality.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2024%5D%5B3rd%20Yr%5D%20Peace%20PPT%20for%20SDG%20-%20Gender%20Equality.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Network Traffic Analysis for Intrusion Detection",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2024%5D%5B3rd_Yr%5D_Network_Traffic_Analysis_for_Intrusion_Detection.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2024%5D%5B3rd%20Yr%5D%20Network%20Traffic%20Analysis%20for%20Intrusion%20Detection.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Visit to Aga Khan Palace",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2023%5D_%5B3rd_Yr%5D_Visit_to_Aga_Khan_Palace.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2023%5D%20%5B3rd%20Yr%5D%20Visit%20to%20Aga%20Khan%20Palace.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Demonstration of DFI Tool FTK Imager",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2023%5D_%5B3rd_Yr%5D_DFI_Tool_Demonstration_FTK_Imager.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2023%5D%20%5B3rd%20Yr%5D%20DFI%20Tool%20Demonstration%20FTK%20Imager.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Information Security and Cloud Computing",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2023%5D_%5B2nd_Yr%5D_Information_Security_and_Cloud_Computing.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2023%5D%20%5B2nd%20Yr%5D%20Information%20Security%20and%20Cloud%20Computing.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Types of OS and its Applications",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2022%5D_%5B2nd_Yr%5D_Types_of_OS_and_its_Applications.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2022%5D%20%5B2nd%20Yr%5D%20Types%20of%20OS%20and%20its%20Applications.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Mod 5 Counter",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2022%5D_%5B2nd_Yr%5D_DECA_Mini_Project_Mod_5_Counter.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2022%5D%20%5B2nd%20Yr%5D%20DECA%20Mini%20Project%20Mod%205%20Counter.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Border Gateway Protocol",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2022%5D_%5B2nd_Yr%5D_Border_Gateway_Protocol.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2022%5D%20%5B2nd%20Yr%5D%20Border%20Gateway%20Protocol.pdf",
		tags: [],
		new: false,
	},
	{
		title: "The Design Thinking and Process behind Manufacturing Cars",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2022%5D_%5B1st_Yr%5D_The_Design_Thinking_and_Process_behind_Manufacturing_Cars.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2022%5D%20%5B1st%20Yr%5D%20The%20Design%20Thinking%20and%20Process%20behind%20Manufacturing%20Cars.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Smart Home Automation",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2022%5D_%5B1st_Yr%5D_Smart_Home_Automation_Final_Presentation.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2022%5D%20%5B1st%20Yr%5D%20Smart%20Home%20Automation%20Final%20Presentation.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Quantum Computing",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2022%5D_%5B1st_Yr%5D_Quantum_Computing.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2022%5D%20%5B1st%20Yr%5D%20Quantum%20Computing.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Methods of Sustainable Development in Civil Engineering",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2022%5D_%5B1st_Yr%5D_Methods_of_Sustainable_Development_in_Civil_Engineering.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2022%5D%20%5B1st%20Yr%5D%20Methods%20of%20Sustainable%20Development%20in%20Civil%20Engineering.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Introduction to FITS Files",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2022%5D_%5B1st_Yr%5D_Introduction_to_FITS_Files.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2022%5D%20%5B1st%20Yr%5D%20Introduction%20to%20FITS%20Files.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Introduction to AstroCameras",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2022%5D_%5B1st_Yr%5D_Introduction_to_AstroCameras.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2022%5D%20%5B1st%20Yr%5D%20Introduction%20to%20AstroCameras.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Integral Calculus in Electrical Circuits",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2022%5D_%5B1st_Yr%5D_Integral_Calculus_in_Electrical_Circuits.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2022%5D%20%5B1st%20Yr%5D%20Integral%20Calculus%20in%20Electrical%20Circuits.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Design Idea for Dimly Lit Roads in India",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2022%5D_%5B1st_Yr%5D_Design_Idea_for_Dimly_Lit_Roads_in_India.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2022%5D%20%5B1st%20Yr%5D%20Design%20Idea%20for%20Dimly%20Lit%20Roads%20in%20India.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Biographies of Dr. Homi J. Bhabha",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2022%5D_%5B1st_Yr%5D_Biography_of_Dr._Homi_J._Bhabha.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2022%5D%20%5B1st%20Yr%5D%20Biography%20of%20Dr.%20Homi%20J.%20Bhabha.pdf",
		tags: [],
		new: false,
	},
	{
		title: "A Revolution Around the Life of Ernest Rutherford",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2022%5D_%5B1st_Yr%5D_A_Revolution_Around_the_Life_of_Ernest_Rutherford.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2022%5D%20%5B1st%20Yr%5D%20A%20Revolution%20Around%20the%20Life%20of%20Ernest%20Rutherford.pdf",
		tags: [],
		new: false,
	},
	{
		title: "The Physics behind Houses of Odisha",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2021%5D_%5B12th%5D_Physics_behind_Houses_of_Odisha.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2021%5D%20%5B12th%5D%20Physics%20behind%20Houses%20of%20Odisha.pdf",
		tags: [],
		new: false,
	},
	{
		title: "	Mathematics in the Konark Temple",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2021%5D_%5B12th%5D_Mathematics_in_the_Konark_Temple.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2021%5D%20%5B12th%5D%20Mathematics%20in%20the%20Konark%20Temple.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Working of Turbines in a Thermal Power Plant",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2021%5D_%5B1st_Yr%5D_Working_of_Turbines_in_a_Thermal_Power_Plant.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2021%5D%20%5B1st%20Yr%5D%20Working%20of%20Turbines%20in%20a%20Thermal%20Power%20Plant.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Smart Materials",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2021%5D_%5B1st_Yr%5D_Smart_Materials.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2021%5D%20%5B1st%20Yr%5D%20Smart%20Materials.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Invictus - Film Review",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2021%5D_%5B1st_Yr%5D_Invictus_-_Film_Review.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2021%5D%20%5B1st%20Yr%5D%20Invictus%20-%20Film%20Review.pdf",
		tags: [],
		new: false,
	},
	{
		title: "India’s Journey through the Coronavirus",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2021%5D_%5B1st_Yr%5D_India%E2%80%99s_Journey_through_the_Coronavirus.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2021%5D%20%5B1st%20Yr%5D%20India%E2%80%99s%20Journey%20through%20the%20Coronavirus.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Effect of Covid-19 on Construction Sector",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2021%5D_%5B1st_Yr%5D_Effect_of_Covid-19_on_Construction_Sector.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2021%5D%20%5B1st%20Yr%5D%20Effect%20of%20Covid-19%20on%20Construction%20Sector.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Conveyor Belts in Smartphone Manufacturing",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2021%5D_%5B1st_Yr%5D_Conveyor_Belts_in_Smartphone_Manufacturing.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2021%5D%20%5B1st%20Yr%5D%20Conveyor%20Belts%20in%20Smartphone%20Manufacturing.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Biography of Sant Tulsidas",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2021%5D_%5B1st_Yr%5D_Biography_of_Sant_Tulsidas.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2021%5D%20%5B1st%20Yr%5D%20Biography%20of%20Sant%20Tulsidas.pdf",
		tags: [],
		new: false,
	},
	{
		title: "A deep dive into Bionanotechnology",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2021%5D_%5B1st_Yr%5D_A_deep_dive_into_Bionanotechnology.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2021%5D%20%5B1st%20Yr%5D%20A%20deep%20dive%20into%20Bionanotechnology.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Universal Children’s Day 2019",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2019%5D_%5B12th%5D_Universal_Children%E2%80%99s_Day.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2019%5D%20%5B12th%5D%20Universal%20Children%E2%80%99s%20Day.pdf",
		tags: [],
		new: false,
	},
	{
		title: "Republic Day 2019",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2019%5D_%5B12th%5D_Republic_Day.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2019%5D%20%5B12th%5D%20Republic%20Day.pdf",
		tags: [],
		new: false,
	},
	{
		title: "National Mathematics Day 2018",
		description: "",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2018%5D_%5B10th%5D_National_Mathematics_Day.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2018%5D%20%5B10th%5D%20National%20Mathematics%20Day.pdf",
		tags: [],
		new: false,
	},
	{
		title: "What Adults can Learn from Kids",
		image: "https://github.com/My-Personal-Stuff/Presentations/raw/main/%5B2021%5D_%5B12th%5D_TedX_-_What_Adults_can_Learn_from_Kids.png",
		link: "https://github.com/My-Personal-Stuff/Presentations/blob/main/%5B2021%5D%20%5B12th%5D%20TedX%20-%20What%20Adults%20can%20Learn%20from%20Kids.pdf",
		new: false,
	},
];

// now reorder the list based on new projects_game:
const new_projects_game = projects_game.filter((project) => project.new === true);
const old_projects_game = projects_game.filter((project) => project.new === false);
export const ordered_projects_game = [...new_projects_game, ...old_projects_game];
