import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Udemy bootcamp",
		location: "Poland, PL",
		description: "I was typically learning all basics web development.",
		icon: React.createElement(LuGraduationCap),
		date: "2020",
	},
	{
		title: "Front-End Developer",
		location: "PL",
		description:
			"I worked as a front-end web developer/freelancer. I also upskilled to the full stack.",
		icon: React.createElement(CgWorkAlt),
		date: "2021 - 2023",
	},
	{
		title: "Full-Stack Developer",
		location: "PL",
		description:
			"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: "2023 - present",
	},
] as const;

export const projectsData = [
	{
		title: "Portfolioo",
		description:
			"I worked as a full-stack developer on this startup project for 6 months. Users can give public feedback.",
		tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
		imageUrl: corpcommentImg,
	},
	{
		title: "Project",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula nisi ut ante consequat pulvinar. Nam ligula nisi, malesuada et.",
		tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
		imageUrl: rmtdevImg,
	},
	{
		title: "Project",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula nisi ut ante consequat pulvinar. Nam ligula nisi, malesuada et.",
		tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"ReactJS",
	"Vue",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"MySQL",
	"MongoDB",
	"PHP",
	"Laravel",
	"Java",
	"GraphQL",
	"Express",
	"Python",
	"Framer Motion",
] as const;
