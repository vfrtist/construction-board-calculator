import { Project1, Project2, BlankTemplate } from "@/Data/TestData";
import { Project, Template } from "@/lib/structures";
import { newProject } from "@/lib/objects";

// Blank structures
export type userRole = "owner" | "editor" | "viewer";

// Database functions
export async function loadProject(id: string): Promise<Project | null> {
	const allFiles = [Project1, Project2];

	for (const file of allFiles) {
		if (file.id === id) {
			return file;
		}
	}
	return null;
}

export async function createProject(
	userID: string,
	templateID: string,
	name: string,
): Promise<Project | null> {
	const template = await getTemplate(templateID);

	if (!template) {
		throw new Error("Template not found");
	}

	const project = newProject(name, template.boards);
	// insert into Projects
	await addProjectUser(userID, project.id, "owner");

	return project;
}

export async function addProjectUser(
	userID: string,
	projectID: string,
	role: userRole,
): Promise<void> {
	// insert into ProjectUsers with data.
}

export async function getTemplate(
	templateID: string,
): Promise<Template | null> {
	const templates = [BlankTemplate];
	const template = templates.find((t) => t.id === templateID);
	return template ?? null;
}
