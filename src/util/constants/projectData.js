import Kintsugi from "../../images/project/kintsugi.gif";
import Scheduler from "../../images/project/scheduler.gif";
import PennyTracker from "../../images/project/penny-tacker.png";

export const projectData = [
	{
		id: 1,
		title: "Kintsugi",
		img: [Kintsugi],
		description:
			"Three people's team project app that to connect user and health providers of their cultural/ linguistic background.It allows to users to book an appointment with transcribed voice messages and able to have video chatting.",
		tech: ["React", "Express.js", "socket.io", "PostgreSQL"],
		github: "https://github.com/Oaya/kintsugi",
		url: "https://625b5f2c08bfe0738c9980f5--scintillating-faloodeh-769e38.netlify.app/",
	},
	{
		id: 2,
		title: "Scheduler",
		img: [Scheduler],
		description:
			"React scheduling application that allows users to book, edit and cancel interview by picking up  an available interviewer and time  up to appointments each day. ",
		tech: ["React", "WebSockets", "Cypress", "Jest"],
		github: "https://github.com/Oaya/Scheduler",
		url: "https://relaxed-wright-b7e3dd.netlify.app/",
	},
	{
		id: 3,
		title: "Penny-tracker",
		img: [PennyTracker],
		description:
			"Budget app with react to track user's expenses and incomes. Users are able to see income and expenses with pie chart by categories, and track monthly and yearly budget.",
		tech: ["React", "React-chart.js", "Firebase", "date-fns"],
		github: "https://github.com/Oaya/Penny-tracker",
		url: "https://oaya.github.io/Penny-tracker/#/",
	},
];
