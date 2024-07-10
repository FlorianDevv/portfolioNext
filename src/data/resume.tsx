import { Icons } from "@/components/icons";
import { CodeIcon } from "lucide-react";

export const DATA = {
	name: "Florian",
	initials: "FlorianDevv",
	url: "https://dillion.io",
	location: "Annecy, France",
	locationLink: "https://www.google.com/maps/place/annecy",
	description: "Développeur Full Stack passionné, spécialisé dans le développement d'applications web;",
	summary:
		"Étudiant passionné par la programmation 💻, avec un vif désir d'apprendre et de créer 🎨. Je possède une solide base en développement front-end et back-end 🖥️, détaillée dans la section compétences.Ma préférence se porte sur le développement front-end, notamment grâce à mon intérêt pour Next.js et ses performances exceptionnelles ⚡. Curieux des dernières innovations technologiques 🚀, je m'efforce constamment de me tenir informé et d'adopter les meilleures technologies disponibles, tant pour le développement que pour les outils du quotidien, y compris pour l'intelligence artificielle ✨.",
	avatarUrl: "/me.png",
	skills: [
		"Next.js",
		"React",
		"Typescript",
		"Nest.js",
		"Node.js",
		"TailwindCSS",
		"Postgres",
		"Docker",
		"C#",
		"PHP",
		"Symfony",
		"Swift",
		"Python",
		"HTML",
		"CSS",
		"JavaScript",
	],
	navbar: [{ href: "#projects", icon: CodeIcon, label: "Projects" }],
	contact: {
		email: "florian.pichon71@gmail.com",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/FlorianDevv",
				icon: Icons.github,
				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/florian-pichon-dev/",
				icon: Icons.linkedin,

				navbar: true,
			},
			email: {
				name: "Send Email",
				url: "#",
				icon: Icons.email,

				navbar: false,
			},
		},
	},

	work: [
		{
			company: "Protechnologies Systems",
			href: "https://www.protechnologies.fr/",
			badges: [],
			location: "Annecy, France",
			title: "Alternance - Développeur Full Stack",
			logoUrl: "/protech.jpg",
			start: "Septembre 2023",
			end: "Juillet 2024",
			description:
				"Developpement d’une API pour la gestion documentaire entre les logiciels métiers et des solutions GED. Utilisation principale de ASP.NET et C# pour l'api, et React pour le front",
		},
		{
			company: "TipToque",
			badges: [],
			href: "https://corporate.tiptoque.com/",
			location: "Remote",
			title: "Stage - Développeur Full Stack",
			logoUrl: "/tiptoque.jpg",
			start: "Avril 2023",
			end: "Juin 2023",
			description:
				"Création d'un outils interne de gestion de données avec l'utilisation de React pour le front-end, combiné à Symfony pour le back-end",
		},
	],
	education: [
		{
			name: "BUT Informatique",
			degree: "BAC + 3",
			location: "Annecy, France",
			logoUrl: "/iut.jpg",
			date: "2024",
		},
		{
			name: "BAC STI2D",
			degree: "Option SIN",
			location: "Le Creusot, France",
			date: "2021",
		},
	],
	projects: [
		{
			title: "Manga Read",
			href: "https://mangareadwebsite.vercel.app/",
			dates: "Février 2024 - Aujourd'hui",
			active: true,
			description:
				"Un site Web auto-hébergé pour lire ses mangas et regarder ses animes. C'est mon plus gros projet personnel à ce jour et je travail toujours dessus pour pouvoir le sortir officiellement un jour.",
			technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
			links: [
				{
					type: "Site Web",
					href: "https://mangareadwebsite.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/FlorianDevv/MangaRead",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/MangaRead.jpg",
			video: "",
		},
		{
			title: "AnimeSaver",
			href: "https://github.com/FlorianDevv/Anime-Saver",
			dates: "Juin 2023 - Juillet 2023",
			active: false,
			description:
				"Site Web personnel où on peut sauvegarder les anime que l'ont à visionner. Un projet personnel pour apprendre à utiliser Nest.js et React ensemble. Projet abandonné pour le moment.",
			technologies: [
				"React",
				"Typescript",
				"Nest.js",
				"PostgreSQL",
				"TailwindCSS",
				"Docker",
				"MUI",
			],
			links: [
				{
					type: "Source",
					href: "https://github.com/FlorianDevv/Anime-Saver",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/AnimeSaver.gif",
			video: "",
		},
		{
			title: "Better Survival",
			href: "https://github.com/FlorianDevv/BetterSurvival",
			dates: "",
			active: false,
			description:
				"Un plugin Minecraft pour améliorer l'expérience de survie. Avec l'ajout de plein de commande ou de pierre tombale pour ne pas perdre ses items.",
			technologies: ["Java"],
			links: [
				{
					type: "Source",
					href: "https://github.com/FlorianDevv/BetterSurvival",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/BetterSurvival.gif",
			video: "",
		},
	],
} as const;
