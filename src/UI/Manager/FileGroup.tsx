import { Project } from "@/lib/structures";
import FileTile from "./FileTile";

export interface FileGroupProps {
	title: string;
	files: Project[];
}

export default function FileGroup({ title, files }: FileGroupProps) {
	return (
		<section className="FileGroup container vertical">
			<h2 className="FileGroupTitle">{title}</h2>
			<ul className="FileList container horizontal">
				{files.map((project) => (
					<FileTile key={project.id} project={project} />
				))}
			</ul>
		</section>
	);
}
