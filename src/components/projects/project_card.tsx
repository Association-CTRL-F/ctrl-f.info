import type { Project } from '#types/project';

interface ProjectCardProps {
	project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
	<article className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-xl border border-slate-700 flex flex-col h-full">
		<div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border-b border-slate-700">
			{project.imagePlaceholder && (
				<img
					src={project.imagePlaceholder}
					alt={`${project.title} illustration`}
					className="w-full h-full object-cover"
				/>
			)}
		</div>
		<div className="p-6 flex flex-col gap-2 flex-1">
			<h3 className="text-2xl font-bold text-white">{project.title}</h3>
			<p className="text-slate-300 leading-relaxed flex-1">
				{project.description}
			</p>
			{project.url && (
				<div className="flex justify-end mt-auto pt-2">
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block px-3 py-1 text-sm rounded bg-slate-700 text-slate-200 hover:bg-slate-600 hover:text-white transition-colors"
					>
						Voir le projet
					</a>
				</div>
			)}
		</div>
	</article>
);
