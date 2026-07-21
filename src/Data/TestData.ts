import { newProject } from "@/lib/objects";
import { Project, ProjectBoards, Template } from "@/lib/structures";

const Data1: ProjectBoards = {
	["board1"]: {
		name: "Board 1",
		boardLength: 96,
		cutInputs: [
			{ id: crypto.randomUUID(), length: 93, name: "", qty: 6 },
			{ id: crypto.randomUUID(), length: 48, name: "", qty: 6 },
			{ id: crypto.randomUUID(), length: 72, name: "", qty: 14 },
			{ id: crypto.randomUUID(), length: 45, name: "", qty: 11 },
			{ id: crypto.randomUUID(), length: 17, name: "", qty: 6 },
			{ id: crypto.randomUUID(), length: 24, name: "", qty: 4 },
			{ id: crypto.randomUUID(), length: 9, name: "", qty: 7 },
			{ id: crypto.randomUUID(), length: 21, name: "", qty: 16 },
			{ id: crypto.randomUUID(), length: 4, name: "", qty: 11 },
			{ id: crypto.randomUUID(), length: 40.5, name: "", qty: 4 },
			{ id: crypto.randomUUID(), length: 79, name: "", qty: 1 },
			{ id: crypto.randomUUID(), length: 39.5, name: "", qty: 2 },
			{ id: crypto.randomUUID(), length: 20, name: "", qty: 6 },
		],
	},

	["board2"]: {
		name: "Board 2",
		boardLength: 144,
		cutInputs: [
			{
				id: crypto.randomUUID(),
				length: 144,
				name: "Porch Roof Front Trim",
				qty: 1,
			},
			{
				id: crypto.randomUUID(),
				length: 72,
				name: "Roof Base Trim",
				qty: 1,
			},
			{
				id: crypto.randomUUID(),
				length: 36,
				name: "Upper Wall Base Trim",
				qty: 2,
			},
		],
	},

	["board3"]: {
		name: "Board 3",
		boardLength: 96,
		cutInputs: [
			{
				id: crypto.randomUUID(),
				length: 93,
				name: "Porch Roof Front Trim",
				qty: 6,
			},
			{
				id: crypto.randomUUID(),
				length: 48,
				name: "Roof Base Trim",
				qty: 6,
			},
			{
				id: crypto.randomUUID(),
				length: 72,
				name: "Upper Wall Base Trim",
				qty: 14,
			},
		],
	},
	["board4"]: {
		name: "Board 4",
		boardLength: 96,
		cutInputs: [
			{
				id: crypto.randomUUID(),
				length: 25,
				name: "Floor Board",
				qty: 40,
			},
		],
	},
};

const Data2: ProjectBoards = {
	["board5"]: {
		name: "Board 5",
		boardLength: 96,
		cutInputs: [
			{
				id: crypto.randomUUID(),
				length: 90,
				name: "Porch Supports",
				qty: 4,
			},
		],
	},

	["board6"]: {
		name: "Board 6",
		boardLength: 96,
		cutInputs: [
			{
				id: crypto.randomUUID(),
				length: 25.25,
				name: "Upper Wall Side Trim",
				qty: 2,
			},
			{
				id: crypto.randomUUID(),
				length: 77.5,
				name: "Lower Wall Side Trim",
				qty: 2,
			},
		],
	},

	["board7"]: {
		name: "Board 7",
		boardLength: 96,
		cutInputs: [
			{
				id: crypto.randomUUID(),
				length: 29,
				name: "Window Trim Rails",
				qty: 4,
			},
			{
				id: crypto.randomUUID(),
				length: 36,
				name: "Window Trim Stiles",
				qty: 4,
			},
			{
				id: crypto.randomUUID(),
				length: 31,
				name: "Window Sills",
				qty: 2,
			},
			{ id: crypto.randomUUID(), length: 48, name: "Door Rail", qty: 1 },
			{
				id: crypto.randomUUID(),
				length: 71.5,
				name: "Door Stiles",
				qty: 2,
			},
		],
	},

	["board8"]: {
		name: "Board 8",
		boardLength: 96,
		cutInputs: [
			{
				id: crypto.randomUUID(),
				length: 25.25,
				name: "Upper Wall Short",
				qty: 2,
			},
			{
				id: crypto.randomUUID(),
				length: 37.125,
				name: "Upper Wall Long",
				qty: 3,
			},
			{
				id: crypto.randomUUID(),
				length: 16.25,
				name: "Above Window",
				qty: 2,
			},
			{
				id: crypto.randomUUID(),
				length: 19.5,
				name: "Below Window",
				qty: 2,
			},
			{
				id: crypto.randomUUID(),
				length: 3.5,
				name: "Above Door",
				qty: 3,
			},
		],
	},
};

export const Project1: Project = {
	id: "lskdfflkjsdfd-lksddflkjsdfd",
	name: "Project 1",
	updatedAt: new Date().toISOString(),
	boards: Data1,
};

export const Project2: Project = {
	id: "slksdjfjfjfjfjfjfjfjfj",
	name: "Project 2",
	updatedAt: new Date().toISOString(),
	boards: Data2,
};

export const BlankTemplate: Template = {
	...newProject("Blank Project"),
	description: "An empty project.",
};
