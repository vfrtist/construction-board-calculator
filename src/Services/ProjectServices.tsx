import { Project1, Project2 } from "@/Data/TestData";
import { Project } from "@/Data/Structures";

export async function loadProject(id: string): Promise<Project | null> {
    const allFiles = [Project1, Project2]

    for (const file of allFiles) {
        if (file.id === id) {
            return file;
        }
    }
    return null
}