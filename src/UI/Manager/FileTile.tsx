import { Project } from "@/lib/structures";
import Link from "next/link";

export interface FileTileProps {
	project: Project;
}

export default function FileTile({ project }: FileTileProps) {
	return (
		<li className="FileTile">
			<Link href={`Project/${project.id}`}>
				<div>{project.name}</div>
			</Link>
		</li>
	);
}
