import { loadProject } from "@/Services/ProjectServices";
import ProjectEditor from "./ProjectEditor";

interface ProjectPageProps {
	params: Promise<{
		id: string;
	}>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { id } = await params;
	const project = await loadProject(id);

	if (!project) {
		return <div>Project not found</div>;
	}

	return <ProjectEditor project={project} />;
}
