export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "InvenTrack Pro",
	shortName: "InvenTrack",
	description:
		"A comprehensive full-stack inventory management dashboard built with Next.js 14, ShadCN UI v2, Redux Toolkit, Node.js, and AWS. This application provides real-time inventory tracking, streamlined state management with Redux, and dynamic data handling with TanStack react Table. The backend is powered by Node.js and Prisma ORM, with deployment on AWS, including services like EC2, RDS, S3, and Amplify for efficient cloud-based solutions.",
	emoji: "📊",
	siteUrl: "https://inventrackpro.netlify.app/",
	category: "Enterprise Software",
	keywords: [
		"full-stack application",
		"inventory management",
		"dashboard",
		"real-time tracking",
		"state management",
		"Redux",
		"AWS deployment",
		"cloud services",
		"Node.js",
		"Prisma ORM",
		"Tailwind CSS",
		"ShadCN UI",
		"TanStack Table",
		"enterprise software",
	],
	mainNav: [
		{
			title: "Home",
			href: "/",
		},
	],
	links: {
		twitter: "https://twitter.com/inventrackpro",
		telegram: "https://t.me/inventrackpro",
		github: "https://github.com/manju1807/inventrackpro-client",
		docs: "https://docs.inventrackpro.com",
	},
	technologies: {
		frontend: [
			"Next.js 14",
			"TypeScript",
			"Tailwind CSS",
			"ShadCN UI",
			"Redux Toolkit",
			"Redux Toolkit Query",
		],
		backend: ["Node.js", "Express.js", "Prisma ORM", "PostgreSQL"],
		cloud: [
			"AWS S3",
			"AWS Amplify",
			"AWS EC2",
			"AWS RDS",
			"AWS API Gateway",
		],
	},
};
