"use client";

import "@/app/Stylings/main.css";
import "@/app/Stylings/colors.css";
import Card from "./Components/Generic/Card";
import ThemeButton from "./Components/Generic/ThemeButton";
import { useState, SetStateAction } from "react";
import { getBoardData, getEmptyProject, Project, ProjectData } from "./Data/Structures";
// import { TestData } from "./Data/TestData";

export default function Home() {

	const [projectData, setProject] = useState<Project>(getEmptyProject());

	function addBoard() {
		setProject((prev) => {
			const newId = crypto.randomUUID();
			return { ...prev, boards: { ...prev.boards, [newId]: getBoardData() } };
		});
	}

	function setProjectData(updater: SetStateAction<ProjectData>) {
		setProject(prev => ({
			...prev,
			updatedAt: new Date().toISOString(),
			boards:
				typeof updater === "function"
					? updater(prev.boards)
					: updater,
		}));
	}

	return (
		<main>
			{Object.entries(projectData.boards).map(([id, card]) => (
				<Card
					key={id}
					id={id}
					data={card}
					setProjectData={setProjectData}
				/>
			))}
			<ThemeButton type="button" className="add" onClick={addBoard}>
				+
			</ThemeButton>
		</main>
	);
}
