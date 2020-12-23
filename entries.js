/**
 * Every entry must include a title and filename, the rest are optional.
 * For simplicity in merges, please add to the bottom of the object.
 *
 * interface
 * {
 *     title: string // display name
 *     filename: string // the name of your HTML file
 *     description?: string // description that will be listed with your entry
 *     author?: string // your name/tag that will be listed
 *     github?: string // username on github that will display a link to your profile
 *     compatibleBrowsers?: array // browsers that this page is compatible with
 * }
 */

const entries = [
	{
		title: "Ant Colony (Example project by author)",
		filename: "ant_colony.html",
		description: "Simulation of an ant colony creating a never ending underground colony. The 'Q' represents a queen that can giver birth to ants 'A'. Food sources are represented by the numbers 9 - 1. (Currently only works in desktop Chrome)",
		author: "Christopher Powroznik (Metroxe)",
		github: "Metroxe",
		compatibleBrowsers: ["Chrome Desktop"],
	},
	{
		title: "Pink vs Unknowns",
		filename: "pink-vs-unknowns.html",
		description: "Pink vs Unknowns is a simulation where two sides have opposite contradictory missions.",
		author: "Aliaksandr B.",
		github: "ByAliaksandr",
		compatibleBrowsers: ["Chrome Desktop, Firefox Desktop, Safari Desktop"],
	},
	{
		title: "Ping Pong",
		filename: "ping-pong.html",
		description: "Ping Pong is a classical arcade game which you can play with two people. You can also set the computer as an auto player, moreover set two auto players and watch them while they play against each other.",
		author: "Osman Fikret Ceylan",
		github: "ofcyln",
		compatibleBrowsers: ["Chrome Desktop", "Firefox Desktop", "Safari Desktop", "Edge Chromium Desktop", "Brave Desktop"],
	},
	{
		title: "De of Het?",
		filename: "de-of-het.html",
		description: "De of Het? is a game to help out who is learning Dutch! The Dutch language is pretty interesting, however there are certain things in the language that have no rules (such as using articles de or het), which makes it difficult to learn. This game brings a different yet fun way of memorizing articles and pronunciation of each word.",
		author: "Yann Braga",
		github: "yannbf",
		compatibleBrowsers: ["Chrome Desktop", "Firefox Desktop", "Safari Desktop", "Edge Chromium Desktop", "Brave Desktop", "Safari Mobile", "Chrome Mobile"],
	},
];
