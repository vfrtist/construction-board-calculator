"use client";

import Card from "@/UI/Generic/Card";
import ThemeButton from "@/UI/Generic/ThemeButton";
import { useState, SetStateAction } from "react";
import { Project, ProjectBoards } from "@/lib/structures";
import { newBoardData } from "@/lib/objects";

interface ProjectEditorProps {
	project: Project;
}

export default function ProjectEditor({ project }: ProjectEditorProps) {
	const [projectData, setProject] = useState<Project>(project);

	function addBoard() {
		setProject((prev) => {
			const newId = crypto.randomUUID();
			return {
				...prev,
				boards: { ...prev.boards, [newId]: newBoardData() },
			};
		});
	}

	function setProjectData(updater: SetStateAction<ProjectBoards>) {
		setProject((prev) => ({
			...prev,
			updatedAt: new Date().toISOString(),
			boards:
				typeof updater === "function" ? updater(prev.boards) : updater,
		}));
	}

	return (
		<>
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
		</>
	);
}
