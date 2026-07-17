"use client";

import Card from "@//UI/Generic/Card";
import ThemeButton from "@/UI/Generic/ThemeButton";
import { useState, SetStateAction } from "react";
import { getBoardData, getEmptyProject, Project, ProjectData } from "@/Data/Structures";
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
