"use client";

import FileGroup from "@/UI/Manager/FileGroup";
import "@/Stylings/Manager.css";
import { Project1, Project2 } from "@/Data/TestData";
import { newProject } from "@/lib/objects";

export default function Manager() {
	return (
		<>
			<h1>Manager</h1>
			<FileGroup title={"Recent"} files={[Project1, Project2]} />
			<FileGroup title={"New"} files={[newProject("blank")]} />
		</>
	);
}
