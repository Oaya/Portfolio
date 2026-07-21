import fullStack from "../../images/icon/full-stack.png";
import backend from "../../images/icon/backend.png";
import database from "../../images/icon/database.png";
import auth from "../../images/icon/auth.png";
import testing from "../../images/icon/testing.png";
import frontend from "../../images/icon/frontend.png";
import deploy from "../../images/icon/deploy.png";
import integration from "../../images/icon/integration.png";

export const skillsData = [
	{
		title: "Full-stack Web Development",
		img: [fullStack],
		description:
			"End-to-end web applications using React, Node.js, Next.js and PostgreSQL with clean architecture and scalable code.",
		//peach
	},
	{
		title: "Frontend Development",
		img: [frontend],
		description:
			"Fast, responsive and user-friendly interfaces built with React and, Vue with TypeScript and modern UI frameworks like Tailwind CSS",
		//sage
	},
	{
		title: "Backend & API Development",
		img: [backend],
		description:
			"Secure and efficient REST APIs using Node.js, Fastify, Prisma and Express with TypeScript. Optimized for performance and scalability.",
		//blue
	},
	{
		title: "Authentication & Authorization",
		img: [auth],
		description:
			"Implementation of secure login systems using JWT, Supabase auth, role-based access control, and best security practices.",
		//peach
	},
	{
		title: "Database Design & Management",
		img: [database],
		description:
			"Well-structured PostgreSQL database with optimized queries for speed, reliability, and data integrity.",
		//sage
	},
	{
		title: "Testing",
		img: [testing],
		description:
			"Unit and integration testing of APIs and functions with Jest, and end-to-end testing of user flows with Cypress, to ensure reliable, bug-free applications.",
		//blue
	},
	{
		title: "Integration",
		img: [integration],
		description:
			"Seamless integration with third-party APIs and services such as CRM platforms, Stripe, and Zoom, enabling reliable data sync and automated workflows.",
		//peach
	},
	{
		title: "deployment & Hosing support",
		img: [deploy],
		description:
			"Deploying applications on could platform with proper environment setup and production-ready configuration",
		//sage
	},
];
