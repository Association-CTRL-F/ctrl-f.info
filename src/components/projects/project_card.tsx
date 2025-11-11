import type { Project } from '#types/project';

interface ProjectCardProps {
	project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => (
	<article
		data-project-id={project.id}
		className="group bg-slate-800/60 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-slate-700/50 backdrop-blur-sm flex flex-col h-full"
	>
		<div className="aspect-video bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center border-b border-slate-700/50 overflow-hidden">
			{project.imagePlaceholder && (
				<img
					src={project.imagePlaceholder}
					alt={`${project.title} illustration`}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
			)}
		</div>
		<div className="p-6 sm:p-7 flex flex-col gap-3 flex-1">
			<h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
				{project.title}
			</h3>
			<p className="text-slate-300 leading-relaxed flex-1 text-sm sm:text-base">
				{project.description}
			</p>
			{project.url && (
				<div className="flex justify-end mt-4 pt-4 border-t border-slate-700/50">
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-slate-700/50 text-slate-200 hover:bg-slate-700 hover:text-white transition-all duration-200 hover:gap-3"
					>
						<span>Voir le projet</span>
						<div className="i-heroicons-arrow-right-solid w-4 h-4 transition-transform group-hover:translate-x-1" />
					</a>
				</div>
			)}
		</div>
	</article>
);
