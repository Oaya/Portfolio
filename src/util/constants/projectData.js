import Kintsugi from "../../images/project/kintsugi.gif";
import Fluently from "../../images/project/fluently.gif";
import PennyTracker from "../../images/project/penny-tacker.png";

export const projectData = [
	{
		title: "Fluently",
		img: [Fluently],
		description:
			"A SaaS platform for language teachers to manage students, schedule lessons, assign AI-generated homework, track goals, and handle billing are all in one place.",
		tech: [
			"React",
			"Ruby on Rails",
			"AWS S3",
			"Stripe",
			"Docker",
			"LiveKit",
			"Open AI API",
		],
		github: "https://github.com/Oaya/fluently-frontend",
		url: "https://fluently-bice.vercel.app/",
	},
	{
		title: "Kintsugi",
		img: [Kintsugi],
		description:
			"Three people's team project app that to connect user and health providers of their cultural/ linguistic background.It allows to users to book an appointment with transcribed voice messages and able to have video chatting.",
		tech: ["React", "Express.js", "socket.io", "PostgreSQL"],
		github: "https://github.com/Oaya/kintsugi",
		url: "https://625b5f2c08bfe0738c9980f5--scintillating-faloodeh-769e38.netlify.app/",
	},
	{
		title: "Penny-tracker",
		img: [PennyTracker],
		description:
			"Budget app with react to track user's expenses and incomes. Users are able to see income and expenses with pie chart by categories, and track monthly and yearly budget.",
		tech: ["React", "React-chart.js", "Firebase", "date-fns"],
		github: "https://github.com/Oaya/Penny-tracker",
		url: "https://oaya.github.io/Penny-tracker/#/",
	},
];
